import React, {Component} from 'react';
import './AddRecipe.css'

export default class AddRecipe extends Component{
    state={
        name:'',
        category:''
       // picture:'',
        //ingredients:'',
        //directions:''
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
    
        this.props.onAddRecipe({ 
            name: this.state.name,
            category: this.state.category
            //picture: this.state.picture,
            //ingredients: this.state.ingredients.split('.'),
            //directions: this.state.directions.split('.')
        });
        this.props.history.push('/recipes')
    }
    
    render(){
        return(
            <form className="add-recipe" onSubmit={this.handleSubmit}>
                <label>Name: <input name="name" value={this.state.name} onChange={this.handleInputChange}/></label>
                <label>Category: <input name="category" value={this.state.category} onChange={this.handleInputChange}/></label>
                {
                //<label>Picture: <input name="picture" value={this.state.picture} onChange={this.handleInputChange}/></label>
                //<label>Ingredients (comma delimited): <input name="ingredients" value={this.state.ingredients} onChange={this.handleInputChange}/></label>
                //<label>Directions (comma delimited): <textarea name="directions" value={this.state.directions} onChange={this.handleInputChange}/></label>
                }
                <button>Add Recipe</button>
            </form>
        )
    }
}