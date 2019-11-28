import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  './Recipe.css';


export default class Recipe extends Component{
    
    handleClick = () => {
        this.props.setRecipe(this.props.recipe);
    }
    render(){
        return(
            <Link to ={this.props.recipe.name} className="RecipeList" onClick={this.handleClick}>{this.props.recipe.name}</Link>
        )
    }

}