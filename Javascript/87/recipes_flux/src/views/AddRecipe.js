import React, {Component} from 'react';
import RecipeActions from '../data/RecipeActions'
import './AddRecipe.css'

export default class AddRecipe extends Component{
    state={
        name:'',
        picture:'',
        ingredients:'',
        directions:''
    }
    handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit=event =>{
        event.preventDefault();

        RecipeActions.addRecipe(this.state.name, this.state.ingredients.split('.'), this.state.directions.split('.'), this.state.picture)
    
        this.props.history.push('/')
    }
    
    render(){
        return(
            <form className="add-recipe" onSubmit={this.handleSubmit}>
                <label>Name: <input name="name" value={this.state.name} onChange={this.handleInputChange}/></label>
                <label>Ingredients (comma delimited): <input name="ingredients" value={this.state.ingredients} onChange={this.handleInputChange}/></label>
                <label>Directions (comma delimited): <textarea name="directions" value={this.state.directions} onChange={this.handleInputChange}/></label>
                <label>Picture: <input name="picture" value={this.state.picture} onChange={this.handleInputChange}/></label>
                <button>Add Recipe</button>
            </form>
        )
    }
}