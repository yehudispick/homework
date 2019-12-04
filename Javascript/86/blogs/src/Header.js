import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'

export default props => {
    return (
        <header>
            <h1>Blogs</h1>
            <NavLink to="/blogs" onClick={props.onGoHome}>Blog List</NavLink>
            
        </header>
    );
}