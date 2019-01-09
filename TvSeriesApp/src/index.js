import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker'; //let the app loads faster on subsequent visits in production
import { BrowserRouter } from 'react-router-dom';



//we will create our own react component

/**
 * [greeting description]
 *
 * createElement take 3 parameters->tag,prop,string.
 * tag we want to use
 * prop is short for properties. we provide to our element.here we provide an empty object.
 * string we use inside our h1 tag
 
 */

// const greeting=React.createElement('h1',{},'Hello World');

//Or

// const greeting=<h1>You love me!</h1>;

/**
 * babel is transpiler which converts jsx to react elements.
 * jsx fully supports js we can embed expressions inside of it.
 */

//Lets create a simple function which will just return a current date.
/**
* getCurrentDate is an arrow function introduce by ES6.This ia shorter syntax of creating functions.
it is identical to ->
 const name=function(){};

 */
{/*const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}
*/}

//jsx has special syntax to interpret expressions -> {}
{/*const greeting = <h1>Current Date:{getCurrentDate()}</h1>;*/}


{ /*ReactDom.render(What do i want to render,where do i want to render it,callback function) takes 3 parameters.*/ }
//3rd paramter is optional->callback function
//everything is tied to 'html' of some sort.react make it easy to render 'Where'.
//The js we are going to write will be compiled or returned to elements on the html page.


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
/**
 * <App/> -> syntax similar to regular html as we are rendering fully functional react component not some variable with little jsx. 
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();