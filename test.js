/**
 * Created by longNightKing on 1/16/16.
 */
var DBHelper = require('./dao');

var name  = 'user';
/* GET all collections. */
function getAllCollection(){
    console.log("################################## GET all collections ##################################");
    console.log(DBHelper.getCollectionNameList());
}

/* GET schema by collection name. */
function getSchema(){
    console.log("################################## GET schema by collection name ##################################");
    console.log(DBHelper.getSchemaByName(name));
}


/* GET all documents by collection name. */
function getAllDocByCollection(){
    console.log("################################## GET all properties by collection name ##################################");
    DBHelper.queryAllByCollectionName(name, function(err, data){
        console.log(data);
    });
}


/* Add a new document by for corresponding collection. */
function addNew(){
    console.log("################################## Add a new document by for corresponding collection ##################################");
    DBHelper.addOneDocToCollection(name, {email: 'test@quokka.com', password: '123456'}, function(err, raw){
        if(!err){
            console.log("add successfully");
        }else{
            console.log("failed");
        }
    });
}


/* Update an exist document for corresponding collection. */
function update(){
    console.log("################################## Update an exist document for corresponding collection ##################################");
    DBHelper.updateOne(name, {email: 'test@quokka.com'}, {email: 'test@quokka.com', password: '123456777'}, function(err, raw){
        if(!err){
            console.log("updated successfully");
        }
    });
}


/* Delete an exist document for corresponding collection. */
function deleteDoc(){
    console.log("################################## Delete an exist document for corresponding collection ##################################");
    DBHelper.removeOneDocFromCollection(name, {email: 'test@quokka.com'}, function(err){
        if(!err){
            console.log("Document droped");
        }
    });
}