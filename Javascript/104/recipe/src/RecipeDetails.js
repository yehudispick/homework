import React, { Component } from "react";
import Ingredients from "./Ingredients";
import './RecipeDetail.css'
import Directions from "./Directions";

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            name: this.props.recipe.name,
            category: this.props.recipe.category
            //picture: this.props.recipe.picture,
            //ingredients: this.props.recipe.ingredients,
            //directions: this.props.recipe.directions,
            //showPicture: false
        }    
    }
    togglePicture = () => {
        this.setState({
            showPicture: !this.state.showPicture
        });
    }
    
    //could not call this locally becuase would not change the state of the recipe array
    //but when I tried passing the function down from the parents the child did not recieve it

    
    /*deleteRecipe = async () =>{
        try {
            const res = await fetch(`http://localhost:3000/api/recipes/${this.props.recipe.id}`, {
                method: 'DELETE',
            });
    
            if (!res.ok) {
                const result = await res.json();
                throw new Error(`${result.status} ${result.statusText} ${result.error}`)
            }
            
            this.setState({
               recipes: this.state.recipes.filter(c => c !== this.props.recipe)
            })
        } catch (error) {
           
        }
    }*/
   
    render(){
        //don't know why does not recieve deleteRecipe function from parent
        console.log(this.props.deleteRecipe)
        return (    
            <>
                <h2 className="recipe">{ this.state.name } </h2>
                <h4 className="recipe">{ this.state.category } </h4>
                <button onClick={this.props.deleteRecipe(this.props.recipe)}>Delete</button>
                {/*<div className="buttondiv">
                    <button onClick={this.togglePicture}>{this.state.showPicture ? 'Hide' : 'Show'} picture</button>
                </div>
                {pictureElem}
                <h3 className="recipe">Ingredients</h3>
                <Ingredients  ingredients={this.state.ingredients}/>
                <h3 className="recipe">Directions</h3>                
                <Directions  directions={this.state.directions}/>*/}
                
            </>

        );
    
    }

}