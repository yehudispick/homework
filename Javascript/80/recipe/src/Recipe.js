import React, {Component} from 'react';
import  './Recipe.css';

export default class Recipe extends Component{
    
    handleClick = () => {
        this.props.setRecipe(this.props.recipe);
    }
    render(){
        return(
            <h2 className="RecipeList" onClick={this.handleClick}>{this.props.recipe.name}</h2>
        )
    }

}