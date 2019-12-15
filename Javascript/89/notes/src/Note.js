import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  './Note.css';


export default class Note extends Component{
    
   
    render(){
        return(
            <Link to ={`/note/${this.props.note.id}`} className="note">{this.props.note.title}</Link>
        )
    }

}