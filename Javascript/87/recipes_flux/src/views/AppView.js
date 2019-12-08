import React from 'react';
import './AppView.css';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import Footer from './Footer';


export default(props)=> {
 // const recipeDetails = props.recipes.selectedRecipe ? (
 //   <RecipeDetails recipe={props.recipes.selectedRecipe} />
 // ) : (
 //   <h3>Please choose one of our delicious recipes</h3>
 // );
  return (
    <div>
      <Header/>
      <RecipeList {...props}/>
      <hr/>
               

      <Footer/>
      
    </div>
  );
}


