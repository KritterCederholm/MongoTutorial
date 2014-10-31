var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var personSchema = new Schema({
    name: String,
    age: Number
});

module.exports.PersonModel = mongoose.model('personList', personSchema);

