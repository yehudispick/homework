import React, { Component } from "react";
import Ingredients from "./Ingredients";
import './RecipeDetail.css'

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            name: this.props.recipe.name,
            ingredients: this.props.recipe.ingredients
        }    
    }
    render(){

        return (    
            <>
                <h2 className="recipe">{ this.state.name } </h2>
                <Ingredients  ingredients={this.state.ingredients}/>
                
            </>

        );
    
    }

}