import React, { Component } from "react";
import Ingredients from "./Ingredients";
import './RecipeDetail.css'
import Directions from "./Directions";

export default class RecipeDetails extends Component {
   
    state={
        showPicture: false
    }
    
    togglePicture = () => {
        this.setState({
            showPicture: !this.state.showPicture
        });
    }
    render(){
        const {name, ingredients, directions, picture} = this.props.recipe
        const pictureElem = this.state.showPicture ?
            <img className="d-block mx-auto rounded" src={picture} alt={name} style={{ width: 100, height: 100 }} /> :
            null;
        return (    
            <>
                <h2 className="recipe">{name} </h2>
                <div className="buttondiv">
                    <button onClick={this.togglePicture}>{this.state.showPicture ? 'Hide' : 'Show'} picture</button>
                </div>
                {pictureElem}
                <h3 className="recipe">Ingredients</h3>
                <Ingredients  ingredients={ingredients}/>
                <h3 className="recipe">Directions</h3>                
                <Directions  directions={directions}/>
                
            </>

        );
    
    }

}