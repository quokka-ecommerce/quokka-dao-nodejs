/**
 * Created by longNightKing on 1/27/16.
 */
/**
 * Define shipping schema here
 * Created by longNightKing on 12/10/15.
 */
var ShippingMethod = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

ShippingMethod.collection = 'ShippingMethod';
ShippingMethod.attribute = {
    days: 'Number',
    price: 'Number',
    description: 'String',
    basic: 'Object'
};
ShippingMethod.schema  = new Schema({
    basic: basic.schema,

    description: String,

    price: Number,

    days: Number
}, {
    collection: ShippingMethod.collection
});