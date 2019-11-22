import express from 'express';
const router  = express.Router();
import * as controller from './order-controller';

//create new order
/*router.post('/order', (req,res)=>{
    res.send('post.order - create an order');
});*/

router.post('/order', controller.index);

//get orders
router.get('/order', (req,res)=>{
    res.send('get.order - get all orders');
});
//get a specific order from a bunch of orders by id
router.get('/order/:id', (req,res)=>{
    res.send('get.order - get an order by id');
});
//update
router.put('/order', (req,res)=>{
    res.send('put.order - update an order');
});
//delete
router.delete('/order', (req,res)=>{
    res.send('delete.order - delete an order');
});

export default router;
