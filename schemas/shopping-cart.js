/**
 * Created by longNightKing on 1/19/16.
 */
var ShoppingCart = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

ShoppingCart.collection = 'shopping_cart';
ShoppingCart.attribute = {
    userId: 'String',
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
    userId: {type: String, unique: true, required: true}
}, {
    collection: ShoppingCart.collection
});