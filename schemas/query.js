/**
 * Define query schema here
 * Created by longNightKing on 12/10/15.
 */
var Query = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Query.collection = 'Query';
Query.attribute = {
    basic: 'Object'
};
Query.schema = new Schema({
    basic: basic.schema
}, {
    collection: Query.collection
});