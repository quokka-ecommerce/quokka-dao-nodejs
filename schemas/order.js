/**
 * Define Order schema here
 * Created by longNightKing on 12/10/15.
 */
var Order = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Order.collection = 'order';
Order.attribute = {
    userId: 'String',
    shippingAddrId: 'String',
    billingAddrId: 'String',
    paymentType: 'Object',
    items: 'Array',
    shippingMethodId: 'String',
    shipmentId: 'String',
    price: 'Number',
    discount: 'Number',
    credits: 'Number',
    tax: 'Number',
    total: 'Number',
    isPaid: 'Boolean',
    basic: 'Object'
};
Order.schema  = new Schema({
    basic: basic.schema,
    userId: {type: String, required: true, ref: 'user'},
    shippingAddrId: {type: Schema.ObjectId, ref: 'address'},
    billingAddrId: {type: Schema.ObjectId, ref: 'address'},
    paymentType: {type: String, ID: String},
    items: [{
        qty: {type: Number, min: 1},
        sku: String
    }],
    shippingMethodId: String,
    shipmentId: String,
    price: Number,
    discount: Number,
    credits: Number,
    tax: Number,
    total: Number,
    isPaid: Boolean
}, {
    collection: Order.collection
});