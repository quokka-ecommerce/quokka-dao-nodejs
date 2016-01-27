/**
 * Created by longNightKing on 12/9/15.
 */
var DAO = exports;
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./schemas/user'),
    Address = require('./schemas/address'),
    CreditCard = require('./schemas/credit-card'),
    Conversation = require('./schemas/conversation'),
    Employee = require('./schemas/employee'),
    Order = require('./schemas/order'),
    Product = require('./schemas/product'),
    Promotion = require('./schemas/promotion'),
    Sale = require('./schemas/sale'),
    Vendor = require('./schemas/vendor'),
    ShoppingCart = require('./schemas/shopping-cart'),
    Shipping = require('./schemas/shipping'),
    TAG = 'DAO:';

var collectionList = [User, Address, CreditCard,
    Conversation, Employee, Order, Product,
    Promotion, Sale, Vendor, ShoppingCart, Shipping];

function connect(dbURL, callback){
    var db = mongoose.connection;
    db.on('error', function(err){
        console.error.bind(console, TAG, err);
    });
    db.once('open', function() {
        console.log(TAG, 'db connected.');
        if(callback){
            callback();
        }
    });
    mongoose.connect(dbURL);
}

function close(){
    mongoose.connection.close();
    console.log(TAG, 'db closed.');
}

function getSchemaInstanceByName(name){
    console.log(TAG, 'get schema of ' + name);
    for(var i = 0; i < collectionList.length; i++){
        if(name.localeCompare(collectionList[i].collection) == 0){
            return collectionList[i];
        }
    }
    return undefined;
}

function getModelByCollection(name){
    var schema = getSchemaInstanceByName(name).schema;
    if(typeof schema === "undefined"){
        return undefined;
    }
    return mongoose.model(name, schema);
}

DAO.connectDB = function(dbURL, callback){
    connect(dbURL, callback);
}

DAO.closeDB = function(){
    close();
}

DAO.getCollectionNameList = function(){
    var list = [];
    for(var i = 0; i < collectionList.length; i++){
        list[list.length] = collectionList[i].collection;
    }
    return list;
}

DAO.getSchemaByName = function(name){
    var schemaInstance = getSchemaInstanceByName(name);
    if(typeof schemaInstance !== "undefined"){
        return schemaInstance.attribute;
    }
    return undefined;
}

DAO.addOneDocToCollection = function(name, data, callback){
    var ModelOfName = getModelByCollection(name);
    if(typeof ModelOfName !== "undefined"){
        var modelInstance = new ModelOfName(data);
        modelInstance.save(function (err) {
            if (err) {
                console.log(TAG, "doc of " + name + " add failed.");
                console.log(TAG, "error: " + err);
            }
            callback(err);
        });
    }else{
        console.log(TAG, "collection: " + name + " not exist.");
    }
}

DAO.removeOneDocFromCollection = function(name, query, callback){
    var ModelOfName = getModelByCollection(name);
    if(typeof ModelOfName !== "undefined"){
        ModelOfName.remove(query, function(err){
            if(err){
                console.log(TAG, "doc of " + name + " remove failed.");
                console.log(TAG, "error: " + err);
            }
            callback(err);
        });
    }else{
        console.log(TAG, "collection: " + name + " not exist.");
    }
}

DAO.updateOne = function(name, query, doc, options, callback){
    var ModelOfName = getModelByCollection(name);
    if(typeof ModelOfName !== "undefined"){
        ModelOfName.update(query, doc, options, function(err, raw){
            if(err){
                console.log(TAG, name + " update failed.");
                console.log(TAG, "error: " + err);
            }
            callback(err, raw);
        });
    }else{
        console.log(TAG, "collection: " + name + " not exist.");
    }
}

DAO.queryAllByCollectionName = function(name, callback){
    var ModelOfName = getModelByCollection(name);
    if(typeof ModelOfName !== "undefined"){
        ModelOfName.find({}, function(err, docs){
            if(err){
                console.log(TAG, name + " query all failed.");
                console.log(TAG, "error: " + err);
            }
            callback(err, docs);
        });
    }else{
        console.log(TAG, "collection: " + name + " not exist.");
    }
};

DAO.queryOneByClauseInCollection = function(name, clause, callback){
    var ModelOfName = getModelByCollection(name);
    if(typeof ModelOfName !== "undefined"){
        ModelOfName.findOne(clause, function(err, doc){
            if(err){
                console.log(TAG, name + " query one failed.");
                console.log(TAG, "error: " + err);
            }
            callback(err, doc);
        });
    }else{
        console.log(TAG, "collection: " + name + " not exist.");
    }
};