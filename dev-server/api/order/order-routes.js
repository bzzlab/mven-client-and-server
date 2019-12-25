import express from 'express';
const router  = express.Router();
import * as controller from './order-controller';

router.post('/order', controller.create());
//get all orders
router.get('/order', controller.index);
//get a specific order
router.get('/order/:id', controller.show());
router.put('/order', controller.update());
router.delete('/order', controller.remove());


export default router;
