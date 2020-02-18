import React from 'react';
import {Link , NavLink} from 'react-router-dom';
import "./Header.css"

export default ()=>{
    return (
        <>
            <h1>Recipes</h1>
            <NavLink to="/recipes" className ="link">recipe list</NavLink> | <NavLink to="/add" className ="link">add a recipe</NavLink>
        </>
    )
}