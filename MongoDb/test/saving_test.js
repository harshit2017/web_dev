//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe our test in callback function we create our test
describe('Saving Records', function (done) {
    //Create tests

    it('Saves a record to the database', function (done) {
        var char = new MarioChar({
            name: 'Mario',// at this point record is not saved to the database and is created locally.
        })

        char.save().then(function () {
            assert(char.isNew === false)//returns true when created locally but not saved to database 
            //returns false when created locally as well saved to database

            done();//tells mocha to proceed fwd
        });
        //use save method to database

    })//we cant use assert methid on save bcos save can take any amount of time. save is asynchronus request
});