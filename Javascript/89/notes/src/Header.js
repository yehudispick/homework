import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css"

export default ()=>{
    return (
        <>
            <h1>Notes</h1>
            <NavLink to="/notes" className ="link">Notes</NavLink> | <NavLink to="/add" className ="link">New note</NavLink>
        </>
    )
}