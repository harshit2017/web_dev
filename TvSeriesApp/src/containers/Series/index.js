import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {

    //state is js object to which our component reacts and renders whatever is needed
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    /**
     * componentDidMount is immediately run after the component is rendered.
     */
    // componentDidMount() {
    // const series = ["Vikings", "Game of Thrones"];
    /**
     * setTimeout executes the function after the secified number of milliseconds.
     * @param  {[function()]} function that needs to be executed
     * @param {[time]}  milliseconds
     */
    // setTimeout(() => {

    /**         
    setState tells react to render the component and its children with updated state.
    *  */
    //     this.setState({ series })
    // }, 2000);
    // 



    /**
     * fetch returns a promise which we will resolve using then() method which takes function as its first argument.
     * we can chain then methods.
     */

    // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //     .then(response => response.json())
    //     .then(json => this.setState({ series: json }));

    /**
     * react has 2 components->presentational and container.
     * presentational->concentarte on how things look.one wont specify how data is loaded and manipulated
     * conatiner->actual functionality
     */

    //}

    onSeriesInputChange = (e) => {
        this.setState({
            seriesName: e.target.value,
            isFetching: true
        });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, isFetching: false }));

        // console.log(e);
        // console.log(e.target.value);
    }

    render() {

            const { series, seriesName, isFetching } = this.state;

            return <div> 
        <Intro message="Here you can find all of your most loved series"/>
        { /*Length of array is:{this.state.series.length}we can refer to series object inside our render method*/ }
        <div>
          <input 
           value={seriesName}
           type="text"
           onChange={this.onSeriesInputChange}/>
          </div>

        {
            !isFetching && series.length === 0 && seriesName.trim() === '' &&
                <p>Please enter series name into the input</p>
        }

        {
            !isFetching && series.length === 0 && seriesName.trim() !== '' &&
                <p>No TV series have been found</p>
        }

        {
            isFetching && <Loader/>
        }

        {
            isFetching === false && <SeriesList list={this.state.series}/>
        }


        </div>;
    }
}


export default Series;