import React from 'react';


export default function Directions(props){
    return(
        <ul>{ props.directions.map(( direction, index)=><li className="recipe" key={index}>{direction}</li>)}</ul>
    )
}