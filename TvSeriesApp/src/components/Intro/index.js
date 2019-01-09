import React from 'react';

//props is a custom js object with all the properties combined

const Intro = props => { //short hand syntax for arrow function->what goes after the parentheisis is returned from the arrow function
    return (
        <p className="App-intro">
            {props.message}
     </p>
    );
}

export default Intro;