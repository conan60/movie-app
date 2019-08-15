import React from 'react';
import Star from '../Star/Star';
import './Rating.css';

function Rating(props) {

    let rating;

    if(props.increment){
        rating =[...Array(5)].map((e,i)=> i < props.rating ? <Star className="mouse-pointer" clickCall={props.increment} selfIndex={i} key={i} isEmpty={false}/> : <Star selfIndex={i} className="mouse-pointer" clickCall={props.increment} key={i} isEmpty={true}/>)
    }else{
        rating =[...Array(5)].map((e,i)=> i < props.rating ? <Star key={i} isEmpty={false}/> : <Star key={i} isEmpty={true}/>)
    }
    
    return (
        <div className="d-flex justify-content-center">
            {rating}
        </div>
    )
}

export default Rating
