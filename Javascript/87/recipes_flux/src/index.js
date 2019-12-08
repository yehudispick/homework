import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';

import RecipeActions from './data/RecipeActions';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

RecipeActions.addRecipe( "Brownies",
    ["Flour", "Sugar","Eggs","Cocoa","Oil"],
    ['Mix all dry ingredients','add the rest of the ingredients','pour into a pan','bake for 45 on 350'],
    'https://celebratingsweets.com/wp-content/uploads/2014/10/Homemade-Brownies-2.jpg');

RecipeActions.addRecipe("Chocolate Chip  Cookies",
    ["Flour", "Sugar", "Eggs", "Chocolate Chips", "Oil", "Vanilla"],
    ['Cream sugar and oil', 'add rest of the ingredients', 'roll dough into cookies', 'bake for 10 minutes in preheated oven set to 350'],
    'https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg');

RecipeActions.addRecipe("Vanilla Cupcakes",
    ["Flour", "Sugar", "Eggs", "Vanilla", "Oil", "Baking powder"],
    ['Mix dry ingredient','add rest of ingredients','fill cupcake liners about half way and bake for 15-17 minutes on 350'],
    'https://www.lifeloveandsugar.com/wp-content/uploads/2017/01/Moist-Vanilla-Cupcakes5.jpg');


