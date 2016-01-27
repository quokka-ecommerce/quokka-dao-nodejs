/**
 * Define Order schema here
 * Created by longNightKing on 12/10/15.
 */
var Order = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Order.collection = 'Order';
Order.attribute = {
    _id: 'String',
    userId: 'User',
    shippingAddress: 'Address',
    credit_card: 'CreditCard',
    items: 'Array',
    shippingMethodId: 'String',
    shipmentId: 'String',
    price: 'Number',
    discount: 'Number',
    credits_use: 'Number',
    credits_earn: 'Number',
    tax: 'Number',
    total: 'Number',
    isPaid: 'Boolean',
    basic: 'Object'
};
Order.schema  = new Schema({
    basic: basic.schema,

    _id: {type: String, required: true, unique: true},

    userId: {type: String, required: true, ref: 'User'},

    shippingAddress: {
        name: String,
        first_line: String,
        second_line: String,
        city: String,
        state: String,
        zip: Number
    },

    credit_card: {
        name: String,
        card_num: Number,
        expiration_date: {type: Date, min: Date.now},
        billing_address:{
            first_line: String,
            second_line: String,
            city: String,
            state: String,
            zip: Number
        }
    },

    items: [{
        qty: {type: Number, min: 1},
        sku: String
    }],

    shippingMethodId: {type: String, ref: 'ShippingMethod'},

    shipmentId: {type: String, ref: 'Shipment'},

    price: {type: Number, min: 0},

    discount: {type: Number, min: 0, max: 1},

    credits_use: {type: Number, min: 0},

    credits_earn: {type: Number, min: 0},

    tax: {type: Number, min: 0},

    total: {type: Number, min: 0},

    isPaid: {type: Boolean, default: false}
}, {
    collection: Order.collection
});