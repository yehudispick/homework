import React from 'react';

export default (props)=>{
    const {comment} = props;
    return(
        <div className="list-group-item list-group-item-action " > 
                   <h5 className="mb-1">{comment.name}  </h5>
                   <p className="mb-1"> {comment.body}</p>
                   <small>{comment.email}</small>
                   </div>
    )
}