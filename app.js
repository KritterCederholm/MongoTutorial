var model = require('./personModel');
var mongo = require('./mongo');

mongo.connect();

//var person = new model.PersonModel({name:'Naja', age:'27'});

/*
person.save(function(err,persons) {
     if(err){
        console.log(err);
    } else {
        console.log("Person saved: " + person);
    }
    //mongo.close();
});
 */

model.PersonModel.find(function(err, persons){
    console.log(persons);
    mongo.close();
})
