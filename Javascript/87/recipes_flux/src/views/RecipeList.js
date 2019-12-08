import React, {Component} from 'react';
import RecipeActions from '../data/RecipeActions'
import RecipeDetails from './RecipeDetails';

export default class RecipeList extends Component {
    
    handleSelectedRecipe = (recipe)=>{        
        RecipeActions.selectedRecipe(recipe)
    }
   
    render(){
        console.log(this.props.recipes.selectedRecipe);
        const {recipes} = this.props.recipes;
        const recipeDetails = this.props.recipes.selectedRecipe ? 
            <RecipeDetails recipe={this.props.recipes.selectedRecipe} />: 
            <h3>Please choose one of our delicious recipes</h3>;
        return(
            <>
                <ul>
                    {recipes.map(recipe => <li key={recipe.id} onClick={()=>this.handleSelectedRecipe(recipe)}>{recipe.name}</li>)}
                </ul>
                <hr/>
                {recipeDetails}
            </>
        );
    }
}