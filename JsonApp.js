//Simple App using Node - Js to show total sales along with time on console.




/* Inventory includes{
    id:{
        itemName:string,
        unit-price:int(float),
        quantity-sold:int,
        timeStamp:string
    }
}*/


//data.json file below->

//we will assume the initial values of each property
//we will only make changes in unit price or quantity sold of our items in our data.json file

/**
 * {
    "id_1": {
        "Item Name": "Milk",
        "Unit Price": 30,
        "Quantity Sold": 1,
        "Cost": 30,
        "Timestamp": "" //it is assumed null for each item
    },
    "id_2": {
        "Item Name": "Butter",
        "Unit Price": 30,
        "Quantity Sold": 3,
        "Cost": 90,
        "Timestamp": ""
    },
    "id_3": {
        "Item Name": "Noodles",
        "Unit Price": 1,
        "Quantity Sold": 10,
        "Cost": 10,
        "Timestamp": ""
    }
}
 * 
 * 
 * 
 * 
 */


//newData.json file below->

/**
 * {
    "id_1": {
        "Item Name": "Milk",
        "Unit Price": 30,
        "Quantity Sold": 7,
        "Cost": 210,
        "Timestamp": "2019-01-24T11:58:05.806Z"
    },
    "id_2": {
        "Item Name": "Butter",
        "Unit Price": 30,
        "Quantity Sold": 3,
        "Cost": 90,
        "Timestamp": "2019-01-24T11:58:05.806Z"
    },
    "id_3": {
        "Item Name": "Noodles",
        "Unit Price": 1,
        "Quantity Sold": 10,
        "Cost": 10,
        "Timestamp": "2019-01-24T11:58:05.806Z"
    }
}
 */





var fs = require("fs");//requires file-system package
const minutes = 5 * 60 * 1000;//set duration after which total sales  is shown

//make a copy of original json file
fs.copyFileSync('data.json', 'newData.json');


var stats = fs.statSync('newData.json');//required for using mtime

var data = fs.readFileSync('newData.json');//reads newData file and stores in data
var fileData = JSON.parse(data);//parses the JSON to JS object
var sale = 0;


{

    //Initially calculate the total sales as well as print them along the  time stamp.

    //for-in loop used for iterating over the file data
    for (var key in fileData) {
        if (fileData.hasOwnProperty(key)) {
            sale += fileData[key].Cost;

        }
    }

    //prints initial value of sale along with time stamp
    //here mtime means the modified time i.e when the file was last modified
    console.log("[ " + stats.mtime + " ]" + " Total Sales - " + sale);


}


//setInterval method will read the copied file after regular intervals as specified by minutes
setInterval(() => {

    data = fs.readFileSync('newData.json');
    fileData = JSON.parse(data);
    sale = 0;
    for (var key in fileData) {
        if (fileData.hasOwnProperty(key)) {
            sale += fileData[key].Cost;
        }
    }


    console.log("[ " + stats.mtime + " ]" + " Total Sales - " + sale);
}, minutes);



//we will also supply watchFile method which will watch our original json file for any modification
fs.watchFile('data.json', (curr, prev) => {

    //watchfile will trigger when some changes occur in the data.json file
    //thus we need to update our own json file i.e. newData.json
    fs.copyFileSync('data.json', 'newData.json');
    //updates the newData.json

    //read the updated newData.json file
    data = fs.readFileSync('newData.json');
    fileData = JSON.parse(data);

    //If current state !== previous state i.e some changes have been made to file
    if (curr.mtime !== prev.mtime) {

        //initialising sale to 0
        sale = 0;


        //for-in loop for iterating over the file data
        for (var key in fileData) {
            if (fileData.hasOwnProperty(key)) {

                //updating cost as well as time stamp b'cos quantities sold have changed
                fileData[key].Cost = fileData[key]["Unit Price"] * fileData[key]["Quantity Sold"];
                fileData[key].Timestamp = curr.mtime;

            }
        }

        //write changes to newData.json as changes are made in data.json 
        fs.writeFileSync('newData.json', JSON.stringify(fileData));

        //reading the updated newData.json file so that the total sales can be evaluated
        data = fs.readFileSync('newData.json');
        fileData = JSON.parse(data);

        for (var key in fileData) {
            if (fileData.hasOwnProperty(key)) {
                sale += fileData[key].Cost;

            }
        }

        //printing the total sales along with time stamp
        console.log("[ " + curr.mtime + " ]" + " Total Sales - " + sale);
    }
});





