import express from 'express';
const router  = express.Router();
import * as controller from './order-controller';

//get all orders (Hole alle Bestellungen)
router.get('/order', controller.index);

//create new order
/*router.post('/order', (req,res)=>{
    res.send('post.order - create an order');
});*/
router.post('/order', controller.create);

//get a specific order from a bunch of orders by id
router.get('/order/:id', controller.show);

//update an order
router.put('/order', controller.update());

//delete an order - here used the function remove instead of delete
router.delete('/order', controller.remove());

export default router;
