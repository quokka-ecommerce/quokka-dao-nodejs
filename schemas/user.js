/**
 * Define user schema here
 * Created by longNightKing on 12/10/15.
 */
var User = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

User.collection = 'user';
User.attribute = {
    user_name: 'String',
    email: 'String',
    password : 'String',
    credits: 'Number',
    profile: 'Object',
    shopping_cart: 'ObjectArray',
    conversation: 'Array',
    orders: 'Array',
    credit_card_list: 'Array',
    address_list: 'Array',
    basic: 'Object'
};
User.schema = new Schema({
    basic: basic.schema,
    address_list: [Schema.ObjectId],
    credit_card_list: [Schema.ObjectId],
    orders: [Schema.ObjectId],
    conversation: [Schema.ObjectId],
    profile: {
        gender: {type: Boolean, default: true},
        DOB: {type: Date, default: Date.now},
        phone_num: Number
    },
    shopping_cart: [{}],
    credits: {type: Number, default: 0},
    password : {type: String, required: true },
    email: {type: String, required: true },
    user_name: {type: String, default: require('../util/util').randomString(8)}
}, {
    collection: User.collection
});