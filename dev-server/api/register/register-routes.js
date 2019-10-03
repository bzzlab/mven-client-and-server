import express from 'express';
const router  = express.Router();

//create new order
router.post('/register', (req,res)=>{
    res.send('post.register - register a user');
});

export default router;