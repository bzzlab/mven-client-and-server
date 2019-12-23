import { StringUtil } from "../../utilities/string-util";


export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid){
        //validation failed -> HTTP Status code 400 for bad request
        return res.status(400).json({message: validation.message});
    }
    /*  HTTP Status code 204 for no content success
        More details see here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204

        The common use case is to return 204 as a result of a PUT request, updating a resource,
        without changing the current content of the page displayed to the user. If the resource
        is created, 201 Created is returned instead. If the page should be changed to the newly
        updated page, the 200 should be used instead.
    */
    return res.status(204).json();
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