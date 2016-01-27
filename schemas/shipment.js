/**
 * Define shipping schema here
 * Created by longNightKing on 12/10/15.
 */
var Shipment = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Shipment.collection = 'Shipment';
Shipment.attribute = {
    _id: Number,
    company: 'String',
    shippingMethodId: 'String',
    tracking_num: 'String',
    ETA: 'Date',
    status: 'String',
    link: 'String',
    basic: 'Object'
};
Shipment.schema  = new Schema({
    basic: basic.schema,

    _id: Number,

    company: String,

    shippingMethodId: {type: String, ref: 'ShippingMethod'},

    tracking_num: String,

    ETA: Date,

    status: String,

    link: String
}, {
    collection: Shipment.collection
});