import React from "react";
import {Link} from 'react-router-dom';
import './NoteDetail.css'

export default function NoteDetails (props){
    
   
    

        return (    
            <>
                <h2>{ props.note.title } </h2>
                <p>{props.note.details}</p>
                <Link to ={`/edit/${props.note.id}`}><button >Edit</button></Link>
                <button onClick={()=>props.onDelete(props.note.id)}>Delete</button>
                
                
                
            </>

        );
    
    }

