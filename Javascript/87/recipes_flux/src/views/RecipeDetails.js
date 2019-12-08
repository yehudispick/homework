import React, { Component } from "react";
import Ingredients from "./Ingredients";
//import './RecipeDetail.css'
import Directions from "./Directions";

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            name: this.props.recipe.name,
            picture: this.props.recipe.picture,
            ingredients: this.props.recipe.ingredients,
            directions: this.props.recipe.directions,
            showPicture: false
        }    
    }
    togglePicture = () => {
        this.setState({
            showPicture: !this.state.showPicture
        });
    }
    render(){
        const pictureElem = this.state.showPicture ?
            <img className="d-block mx-auto rounded" src={this.state.picture} alt={this.state.name} style={{ width: 100, height: 100 }} /> :
            null;
        return (    
            <>
                <h2 className="recipe">{ this.state.name } </h2>
                <div className="buttondiv">
                    <button onClick={this.togglePicture}>{this.state.showPicture ? 'Hide' : 'Show'} picture</button>
                </div>
                {pictureElem}
                <h3 className="recipe">Ingredients</h3>
                <Ingredients  ingredients={this.state.ingredients}/>
                <h3 className="recipe">Directions</h3>                
                <Directions  directions={this.state.directions}/>
                
            </>

        );
    
    }

}