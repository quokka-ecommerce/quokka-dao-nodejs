/**
 * Created by longNightKing on 1/19/16.
 */
var ShoppingCart = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

ShoppingCart.collection = 'ShoppingCart';
ShoppingCart.attribute = {
    _id: 'String',
    items: 'Array',
    isActive: 'Boolean',
    basic: 'object'
};
ShoppingCart.schema = new Schema({
    basic: basic.schema,

    items: [{
        qty: {type: Number, min: 1},
        sku: String
    }],

    isActive: Boolean,

    _id: {type: String, unique: true, required: true, ref: 'user'}
}, {
    collection: ShoppingCart.collection
});