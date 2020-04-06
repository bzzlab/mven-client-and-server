import mongoose from 'mongoose'
import {StringUtil} from "../utilities/string-util";

const orderSchema = new mongoose.Schema({
    orderid : String,
    concertPassType: String,
    numOfTickets : Number,
    orderDate: {type: Date, default: Date.now },
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});
/**
 * set timestamp when inserting a record
 */
orderSchema.set('timestamps', true);
/**
 * set a virtual property by concatenating two fields
 */
orderSchema.virtual('orderHash').get(function () {
    const orderid = StringUtil.capitalize(this.orderid.toLowerCase());
    const orderDate = StringUtil.capitalize(this.orderDate.toLowerCase());
    return `${orderid}-${orderDate}`;
});


export default mongoose.model('OrderModel', orderSchema);
