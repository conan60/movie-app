import React from 'react';
import './Star.css';

function Star(props) {
    return (
        <img src={require(props.isEmpty ? "./emptyStar.png" : "./star.png")} alt="star" className={"star "+props.className} onClick={()=>props.clickCall(props.selfIndex+1)} />
    )
}

export default Star
