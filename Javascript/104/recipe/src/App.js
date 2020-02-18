import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import RecipeDetails from './RecipeDetails';
import Recipe from './Recipe'
import Header from './Header'
import AddRecipe from './AddRecipe';

class App extends Component{

  state = {
    recipes:[]
  }
  async getRecipes(){
      try {
          const response = await fetch('http://localhost:3000/api/recipes');
          if (!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
          }
          
          const loadedRecipes = await response.json();
          this.setState({
            recipes: loadedRecipes
          })
      }
      catch (error) {
       
      }
      
   
  
}
  
   handleAddRecipe = async(recipe) =>{
    
      const response = await fetch('http://localhost:3000/api/recipes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipe)

      });
      if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText} ${response.error}`)
      }

      const result = await response.json();
     
      const recipes =[...this.state.recipes, result];
      this.setState({
        recipes: recipes
      })      
  
}
   
 
  getRecipeDetails(match){
    const currentlySelected = this.state.recipes.find(r=>r.id === +match.params.recipeId)
    return(
      currentlySelected ?
      <RecipeDetails recipe={currentlySelected}/>:
      <h3>Please choose one of our delicious recipes</h3>

    )
  }

  deleteRecipe = async (recipe) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/recipes/${recipe.id}`, {
            method: 'DELETE',
        });

        if (!res.ok) {
            const result = await res.json();
            throw new Error(`${result.status} ${result.statusText} ${result.error}`)
        }
        
        this.setState({
           recipes: this.state.recipes.filter(c => c !== recipe)
        })
    } catch (error) {
       
    }
}

  componentDidMount(){
    this.getRecipes();
  }
  render(){
    const recipes = this.state.recipes.map(recipe =><Recipe key={recipe.id} recipe={recipe} setRecipe={this.setRecipe} deleteRecipe={()=>this.deleteRecipe(recipe)}/>);
 
      return (
      
        <BrowserRouter>
          <div className="container">
            <div>
              <Header/>
              <hr/>
              <Switch>
                  <Route  path="/recipes/"  render ={() => recipes} />
                  {/*<Route path="/recipe/:recipeId" render ={()=>recipeDetails}/>*/}
                  <Route path="/recipe/:recipeId" render ={({ match }) => this.getRecipeDetails(match)}/>
                  <Route path="/add" render={routeProps =><AddRecipe onAddRecipe={this.handleAddRecipe} {...routeProps} />}/>
                  <Redirect  to="recipes"/>
              </Switch>
            </div>
          </div>
        </BrowserRouter> 
   
    );
  }
}

export default App;
