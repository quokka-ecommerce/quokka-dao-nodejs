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
    DBHelper.addOneDocToCollection(name, {
        _id: 'cwang77@quokka.com',
        password: '986320',
        }, function(err, raw){
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
    DBHelper.updateOne(name, {email: 'test@quokka.com'}, {email: 'test@quokka.com', password: '12123453456777'}, function(err, raw){
        if(!err){
            console.log("updated successfully");
        }
    });
}


/* Delete an exist document for corresponding collection. */
function deleteDoc(){
    console.log("################################## Delete an exist document for corresponding collection ##################################");
    DBHelper.removeOneDocFromCollection(name, {email: 'test456@quokka.com'}, function(err){
        if(!err){
            console.log("Document droped");
        }
    });
}

/* validate user password. */
function validatePassword(){
    console.log("################################## validate user password ##################################");
    DBHelper.queryOneByClauseInCollection(name, {email: 'test@quokka.com'}, function(err, user){
        user.comparePassword('123456', function(err, isMatch) {
            if (err) throw err;
            console.log('123456:', isMatch);
        });

        user.comparePassword('7654321', function(err, isMatch) {
            if (err) throw err;
            console.log('7654321:', isMatch);
        });
    });
}

DBHelper.connectDB('mongodb://localhost:27017/test', function(){
    addNew();
});

setTimeout(function(){
    DBHelper.closeDB();
}, 5 * 1000);


