/**
 * Define employee schema here
 * Created by longNightKing on 12/10/15.
 */
var Employee = exports;
var Schema = require('mongoose').Schema;
var basic = require('./basic');

Employee.collection = 'Employee';
Employee.attribute = {
    _id: 'String',
    name: 'String',
    password: 'String',
    basic: 'Object'
};
Employee.schema  = new Schema({
    basic: basic.schema,

    _id: {type: String, required: true, unique: true},

    name: String,

    password: String
}, {
    collection: Employee.collection
});