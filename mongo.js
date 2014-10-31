var mongoose = require('mongoose');

module.exports.connect = function(){
    //mongoose.connect("mongodb://localhost/test");
    mongoose.connect("mongodb://barbercue:mongolian@ds047050.mongolab.com:47050/mongolianrice");
    mongoose.connection.once('open', function(){
        console.log("Connected");
    });
}

module.exports.close = function(){
    mongoose.connection.close();
    console.log("Connection closed");
}