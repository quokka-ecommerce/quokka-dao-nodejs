/**
 * Define conversation schema here
 * Created by longNightKing on 12/10/15.
 */
var Conversation = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Conversation.collection = 'Conversation';
Conversation.attribute = {
    _id: 'User',
    MSGs: 'MSG',
    basic: 'Basic'
};
Conversation.schema  = new Schema({
    basic: basic.schema,

    _id: {type: String, required: true, unique: true, ref: 'User'},

    MSGs: [{
        ask_time: {type: Date, default: Date.now},
        content: String,
        response_time: {type: Date, default: Date.now},
        response: String
    }]
}, {
    collection: Conversation.collection
});