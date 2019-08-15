import React, { Component } from 'react';
import Rating from '../Rating/Rating';

export class RatingSearch extends Component {
    constructor(props){
        super(props);
        this.state = {rating : 0};
    }

    incrementRatingHandler = (rating)=>{
        this.setState({
            rating : rating
        });
        this.props.search(rating);
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h6>Minimum rating</h6>
                <Rating increment={this.incrementRatingHandler} rating={this.state.rating}/>
            </div>
        )
    }
}

export default RatingSearch
