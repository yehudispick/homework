import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import RecipeDetails from './RecipeDetails';
import Recipe from './Recipe'
import Header from './Header'

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
    return this.state.recipes.map(recipe =><Recipe key={recipe.id} recipe={recipe} setRecipe={this.setRecipe}/>);
  }
  setRecipe=(recipe)=>{
    this.setState({
      currentlySelected: recipe
    });
  }
  getRecipeDetails(){
    if(this.state.currentlySelected){
      return <RecipeDetails key={this.state.currentlySelected.id} recipe={this.state.currentlySelected}/>
    }
    else{
      return <h3>please choose a recipe</h3>;
    }
  }
  render(){
    const recipes =this.getRecipes();
    const recipeDetails = this.getRecipeDetails();
      return (
      
        <BrowserRouter>
          <div>
            <Header/>
            <hr/>

            <Switch>
                <Route  path="/recipes"  render ={()=>recipes}/>
                <Route path="/:recipe" render ={()=>recipeDetails}/>
                <Redirect  to="recipes"/>
            </Switch>
          </div>
       
        </BrowserRouter>
      
       
   
    );
  }
}

export default App;
