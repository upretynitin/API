const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        // name: {
        //   type: String,
        //   required: true,
        // },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        // state: {
        //   type: String,
        //   required: true,
        // },

        country: {
            type: String,
            required: true,
        },
        postalcode: {
            type: Number,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                // required: true,
            },
            product: {
                type: mongoose.Schema.ObjectId,
                ref: "products",
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        // required: true,
    },
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    paidAt: {
        type: Date,
        // required: true,
    },
    itemsPrice: {
        type: Number,
        default: 0,
    },
    taxPrice: {
        type: Number,

        default: 0,
    },
    shippingPrice: {
        type: Number,

        default: 0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
var OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;