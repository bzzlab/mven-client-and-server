import { Order } from './order.js';
import Address from '../user/address';


/**
 * Get all orders
 * @param req
 * @param res
 * @returns {*}
 */
export function index(req, res) {
    //stub function
    return res.json();
}

/**
 * Get a single order
 * @param req
 * @param res
 * @returns {*}
 */
export function show(req, res) {
    //stub function
    return res.json();
}


/**
 * Create a new order
 * @param req - request parameter
 * @param res - response data
 * @returns {*}
 */
export function create(req, res) {
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

/**
 * Helper-function for faking an order id
 * @returns {string}
 */
function generateOrderId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}

/**
 * Update order
 * @param req
 * @param res
 * @returns {*}
 */
export function update(req, res) {
    //stub function
    return res.json();
}

/**
 * Delete order
 * @param req
 * @param res
 * @returns {*}
 */
export function remove(req, res) {
    //stub function
    return res.json();
}
