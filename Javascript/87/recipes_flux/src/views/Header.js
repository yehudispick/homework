import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

export default () => {
    return (
        <header>
            <h1>Recipes</h1>
            <Link to="/add" className ="link">add a recipe</Link>
        </header>
    );
}