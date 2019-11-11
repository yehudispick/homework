import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeDetails from './RecipeDetails';
import Recipe from './Recipe'

class App extends Component{

  state = {
    recipes:[
      {
        id: 1,
        name: "Brownies",
        ingredients:[
          "Flour",
          "Sugar",
          "Eggs",
          "Cocoa",
          "Oil"
        ]
      },
      {
        id: 2,
        name: "Chocolate Chip  Cookies",
        ingredients:[
          "Flour",
          "Sugar",
          "Eggs",
          "Chocolate Chips",
          "Oil",
          "Vanilla"
        ]
      },
      {
        id: 3,
        name: "Vanilla Cupcakes",
        ingredients:[
          "Flour",
          "Sugar",
          "Eggs",
          "Vanilla",
          "Oil",
          "Baking powder"
        ]
      },
    ],
  currentlySelected: null
  }
  getRecipes(){
    return this.state.recipes.map(recipe =><Recipe key={recipe.id} recipe={recipe} setRecipe={this.setRecipe.bind(this)}/>);
  }
  setRecipe(recipe){
    this.setState({
      currentlySelected: recipe
    });
  }
  getRecipeDetails(){
    if(this.state.currentlySelected){
      return <RecipeDetails key={this.state.currentlySelected.id} recipe={this.state.currentlySelected}/>
    }
  }
  render(){
    const recipes =this.getRecipes();
    const recipeDetails = this.getRecipeDetails();
      return (
      <div>
       {recipes}
       {recipeDetails}
      </div>
    );
  }
}

export default App;
