//import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import RecipeActionTypes from './RecipeActionTypes';
import RecipeDispatcher from './RecipeDispatcher';
import Recipe from './Recipe'


class RecipeStore extends ReduceStore {
    nextId = 1;
    
    constructor() {
        super(RecipeDispatcher);
    }

   

    getInitialState() {
        return Object.freeze({
            recipes: [],
            selectedRecipe: null
        });
    }
    reduce(state, action) {
        switch (action.type) {
            case RecipeActionTypes.ADD_RECIPE:
                const recipe = new Recipe({
                    id: this.nextId++,
                    name: action.name,
                    ingredients: action.ingredients,
                    directions: action.directions,
                    picture: action.picture
                }); 
                
                return Object.freeze({recipes: [...state.recipes, recipe], selectedRecipe: null});
            case RecipeActionTypes.SELECTED_RECIPE:
                    return Object.freeze({recipes: state.recipes, selectedRecipe: action.selectedRecipe});
            default:
                return state;
        }
    }
}

export default new RecipeStore();