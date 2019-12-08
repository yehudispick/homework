import RecipeActionTypes from './RecipeActionTypes';
import RecipeDispatcher from './RecipeDispatcher';

const Actions = {
  addRecipe(name, ingredients, directions, picture) {
    RecipeDispatcher.dispatch({
      type: RecipeActionTypes.ADD_RECIPE,
      name,
      ingredients,
      directions,
      picture
    });
  },
  
  selectedRecipe(recipe){
    RecipeDispatcher.dispatch({
      type: RecipeActionTypes.SELECTED_RECIPE,
      selectedRecipe: recipe
    })
  }
  
};

export default Actions;