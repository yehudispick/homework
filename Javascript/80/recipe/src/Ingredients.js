import React from 'react';


export default function Ingredients(props){
    return(
        <ul>{ props.ingredients.map(( ingredient, index)=><li className="recipe" key={index}>{ingredient}</li>)}</ul>
    )
}