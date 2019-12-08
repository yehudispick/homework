import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './AppView.css';
import Header from './Header';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import RecipeDetails from './RecipeDetails';
import Footer from './Footer';


export default(props)=> {
 // const recipeDetails = props.recipes.selectedRecipe ? (
 //   <RecipeDetails recipe={props.recipes.selectedRecipe} />
 // ) : (
 //   <h3>Please choose one of our delicious recipes</h3>
 // );
 
  return (
    
      <BrowserRouter>
      <Header/>
      <RecipeList {...props}/>
      <hr/>
      
      <Route path="/add" component={AddRecipe}/>         
      
      <Footer/>
      </BrowserRouter>
    
  );
}


