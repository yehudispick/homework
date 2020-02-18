import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  './Recipe.css';


export default class Recipe extends Component{
    
    
    handleClick = () => {
        this.props.setRecipe(this.props.recipe);
    }        

    render(){
        
        return(
            <Link to ={`/recipe/${this.props.recipe.id}`}className="RecipeList" deleteRecipe={()=>this.props.deleteRecipe(this.props.recipe)}>{this.props.recipe.name}</Link>
        )
    }

}