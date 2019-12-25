import { Order } from './order.js';
import Address from '../user/address';


export function index(req,res) {
    return res.json();
}
export function show(req,res) {
    return res.json();
}
export function update(req,res) {
    return res.json();
}
export function remove(req,res) {
    return res.json();
}

/**
 * Main function for getting/processing order data
 * @param req
 * @param res
 * @returns {*}
 */
export function create(req,res) {
    //init address
    let new_address = new Address(
        req.body.firstname.toLowerCase(),
        req.body.lastname.toLowerCase(),
        req.body.street.toLowerCase(),
        req.body.zip.toLowerCase(),
        req.body.city.toLowerCase()
    );

    let new_order = new Order(
        generateOrderId(), new_address
    );
    console.log("log order on the server (see below):");
    console.log(new_order);
    return res.json({
        message: "We received your order (Order-ID, First/Lastname)",
        id: new_order.orderid,
        firstname: new_address.firstname,
        lastname: new_address.lastname,
    });
}

function generateOrderId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}
