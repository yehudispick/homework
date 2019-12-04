import React from 'react';
import {Link} from 'react-router-dom'

export default function BlogInfo(props){
    const {user} = props
        return(
            <>
                <div key={user.id}  className="blog" onClick={() => props.onSelectedBlog(user)}> 
                
                <div class="col-sm-6">
               <div class="card">
                 <div class="card-body" >
                 <Link to={`/blog/${user.id}`}>
                   <h5 class="card-title">{user.name}</h5>
                   </Link>
                   <a href="#" class="card-link">{user.website}</a>
                   <p class="card-text">{user.company.name}</p>
                   <p class="card-text">{user.company.catchPhrase}</p>
                   <p class="card-text">{user.company.bs}</p>
                </div>
               </div>
               </div>
                  
                </div>
            </>
        );  
}