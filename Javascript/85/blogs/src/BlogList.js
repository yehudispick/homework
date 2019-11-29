import React from 'react';

export default function BlogList(props){
    
        return(
            <>
                {props.users.map(user=>
                    <div key={user.id}  onClick={()=>{props.onSelectedBlog(user.id); props.showName(user.name)}} className="blog" >
                       <span className="title">{user.name}</span>
                       <span className="website">{user.website}</span>
                       <span className="company">
                        {user.company.name}
                        {user.company.catchPhrase}
                        {user.company.bs}</span>
                    </div>
                )}
            </>
        );  
}