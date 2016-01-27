/**
 * Created by longNightKing on 1/25/16.
 */
/**
 * Define shipping schema here
 * Created by longNightKing on 12/10/15.
 */
var Shipping = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Shipping.collection = 'shipping';
Shipping.attribute = {
    id: Number,
    company: 'String',
    method: 'String',
    tracking_num: 'String',
    ETA: 'Date',
    status: 'String',
    link: 'String',
    basic: 'Object'
};
Shipping.schema  = new Schema({
    basic: basic.schema,
    id: Number,
    company: String,
    method: String,
    tracking_num: String,
    ETA: Date,
    status: String,
    link: String
}, {
    collection: Shipping.collection
});