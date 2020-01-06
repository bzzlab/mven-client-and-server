import express from 'express';
const router  = express.Router();
import * as controller from './order-controller';

/*
pay attention to the syntax controller.create() means you call
function create with empty parameters that don't correspond with
the actual implementation
wrong: router.post('/order', controller.create());
corret - without (): router.post('/order', controller.create);
*/

router.post('/order', controller.create);
//get all orders
router.get('/order', controller.index);
//get a specific order
router.get('/order/:id', controller.show);
router.put('/order', controller.update);
router.delete('/order', controller.remove);


export default router;
