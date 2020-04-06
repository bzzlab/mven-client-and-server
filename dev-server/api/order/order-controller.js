import { Order } from './order.js';

import  UserModel from '../../model/user-model';
import  OrderModel from '../../model/order-model';
import moment from "moment";

//Alternative way to import a module compared to order above
import Address from '../user/address';
import {TimeUtil} from "../../utilities/time-util";


/**
 * Find all orders
 * @param req
 * @param res
 * @returns {*}
 */
export function index(req,res) {
    OrderModel.find({}, (error, orderList) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({orders: orderList});
    }).populate('customer', 'email', 'user');
}

/**
 * Main function for getting/processing order data
 * @param req
 * @param res
 * @returns {*}
 */
export function create(req,res) {
    //for testing purpose user-id
    let id = 10;
    //init address
    let new_address = new Address(
        req.body.firstname.toLowerCase(),
        req.body.lastname.toLowerCase(),
        req.body.street.toLowerCase(),
        req.body.zip.toLowerCase(),
        req.body.city.toLowerCase()
    );


    let new_order = new Order(
        generateOrderId(), new_address,
        req.body.concertPassType,
        req.body.numOfTickets
    );

    //TODO: How to save Address object of the customer?
    UserModel.findOne({_id: id}, (error, user) => {
        if (error && !user){
            return res.status(500).json();
        }
        const orderModel = new OrderModel();
        orderModel.id = new_order.orderid;
        orderModel.concertPassType = new_order.product;
        orderModel.numOfTickets = new_order.amount;
        //use library moment to handle dates easily
        orderModel.orderDate = moment(TimeUtil.Now);
        orderModel.customer = user._id;
        orderModel.save(error => {
            if (error) {
                return res.status(500).json();
            }
            //return res.status(201).json();
            return res.status(201).json({
                message: "We received your order (Order-ID, First/Lastname)",
                id: new_order.orderid,
                firstname: new_address.firstname,
                lastname: new_address.lastname,
            })
        })
    });

    /*console.log("log order on the server (see below):");
    console.log(new_order);
    return res.json({
        message: "We received your order (Order-ID, First/Lastname)",
        id: new_order.orderid,
        firstname: new_address.firstname,
        lastname: new_address.lastname,
    });*/
}


export function show(req,res) {
    //Pay attention: it's not req.body.id but req.params.id!
    OrderModel.findOne({_id: req.params.id}, (error,order) => {
        if (error){
            return res.status(500).json();
        }
        if (!order){
            return res.status(400).json();
        }
        return res.status(200).json({ order: order});
    });
}
export function update(req,res) {
    //test id
    const id = 10;
    UserModel.findOne({_id: id}, (error,user) => {
        if (error){
            return res.status(500).json();
        }
        if (!user){
            return res.status(400).json();
        }
        const orderModel = new OrderModel();
        orderModel.concertPassType =  req.body.concertPassType;
        orderModel.numOfTickets = req.body.numOfTickets;
        orderModel.orderDate = moment(TimeUtil.Now);
        orderModel.customer = user._id;
        OrderModel.findByIdAndUpdate({_id: orderModel._id},
            orderModel, error =>{
            if (error){
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function remove(req,res) {
    const id = 5;
    OrderModel.findOne({_id: req.params.id}, (error, order) => {
        if (error){
            return res.status(500).json();
        }
        if (!order){
            return res.status(404).json();
        }
        if (order.customer._id.toString() !== id){
            //forbidden
            return res.status(403).json({message: 'Not allowed to delete customer\'s order'})
        }
        OrderModel.deleteOne({_id: req.params.id}, error =>{
                if (error){
                    return res.status(500).json();
                }
                return res.status(204).json();
            });
    });

    return res.json();
}

function generateOrderId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}
