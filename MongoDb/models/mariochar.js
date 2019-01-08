const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//create model

const MarioChar = mongoose.model('mariochar', MarioCharSchema);
//mariochar->collection name
//mariochar will be based on schema MarioCharSchema

module.exports = MarioChar;
//exporting Mariochar so that we can use all the files in the projectls