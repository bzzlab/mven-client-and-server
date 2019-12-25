export function index(req, res) {
    return res.json({message: "Hello World"});
}

/*
import Account from './account';

export function index(req,res) {
    //init account
    let new_account = new Account(
        generateUserId(),
        req.body.email.toLowerCase(),
        req.body.password.toLowerCase()
    );

    console.log(new_account);
    return res.json({message: "User"+new_account.email+"registered!", id: new_account.id});
}

function generateUserId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}


export function index(req, res) {
    return res.status(200).json({ message: 'Hello World' });
}
*/
