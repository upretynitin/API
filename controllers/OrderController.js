const OrderModel = require("../models/Order");

class OrderController {
    static creteorder = async(req,res)=>{
        try {
            console.log(req.body);
            const {shippingInfo,orderItems,paymentInfo,itemsPrice,taxPrice,shippingPrice,totalPrice} =req.body
            const order = await OrderModel.create({
                shippingInfo,
                orderItems,
                paymentInfo,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
                paidAt:Date.now(),
                user:req.user._id

            })
            res
                .status(201)
                .json({ status: "success", message: "Order added Successfully 😃🍻",order});
        } catch (error) {
            console.log(error);
        }
    }

    static getsingleorder = async(req,res)=>{
        try {
            const data = await OrderModel.findById(req.params.id)
            res.status(200)
                .json({ status: 'success', data });
        } catch (error) {
            console.log(error);
        }
    }

    // In myorder user can watch its orders
    static myorder = async(req,res)=>{
        try {
            const order = await OrderModel.find()
            res.status(200)
                .json({ status: 'success', data });
        } catch (error) {
            console.log(error);
        }
    }

    // For admin(admin get all orders)
    static getallorders = async(req,res)=>{
        try {
            const order = await OrderModel.find()
            res.status(200)
                .json({ status: 'success', data });
        } catch (error) {
            console.log(error);
        }
    }

    static deleteorder = async(req,res)=>{
        try {
            const order = await OrderModel.findByIdAndDelete(req.params.id)
            res.status(200)
                .json({ status: 'success', data });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = OrderController