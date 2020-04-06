import { StringUtil } from "../../utilities/string-util";
import UserModel from "../../model/user-model";

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid){
        return res.json({message: validation.message});
    }
    UserModel.findOne({ email: req.body.email.toLowerCase()}, (error,user) =>{
        if (error){
            return res.status(500).json({ message: 'error in auth-controller -> index.'});
        }
        if (!user){
            return res.status(401).json({ message: 'auth-controller -> index: user not found!'});
        }

        const passwordsMatch = true;
        if (!passwordsMatch){
            return res.status(401).json({ message: 'auth-controller -> index: password does not match!'});
        }
        return res.status(200).json();
    })
}

/**
 * Validates (checks) in the backend the submitted data (in this case username, password)
 * that shouldn't be empty.
 * @param body
 * @returns {{isValid: *, message: string}}
 */
function validateIndex(body) {
    let error_msg = '';
    if (StringUtil.isEmpty(body.username)) {
        error_msg += "Username is required. ";
    }
    if (StringUtil.isEmpty(body.password)) {
        error_msg += "Password is required. ";
    }

    /*  how create and return an object in javascript
        https://stackoverflow.com/questions/12272239/javascript-function-returning-an-object
    */
    return {
        isValid: StringUtil.isEmpty(error_msg),
        message: error_msg
    }

}
