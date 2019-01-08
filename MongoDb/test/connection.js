const mongoose = require('mongoose');

//ES6 Promises-promise is an object
//mongoose.Promise = global.Promise;//this is a promise on global object

//connect to mongoDataBase
mongoose.connect('mongodb://localhost/test');



//tell our application explicitly when
//the connection is made as our application doesn't know when the connection is confirmed

mongoose.connection.once('open', function () {
    console.log("connection made,now fireworks !!!");
}).on('error', function (error) {
    console.log('Connection error:', error)
});


//here .once is an eventlistner-means just listen to this event once
//so once the connection is open execute the callback function
//on is another event listener which listens everytime.it listens to any error.