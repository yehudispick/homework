import React from 'react';
import "./Comment.css"



export default (props)=>{
    const {comment} = props;
    return(
        
        <>
            <h3>{comment.content}</h3>
            <h4>by {comment.author} on {new Date(comment.date).toLocaleString()}</h4>
       
       </>
       
    )
}