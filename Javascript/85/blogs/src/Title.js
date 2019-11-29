import React from 'react';

export default function Title(props){
    
        return(
            <>
               <div className="jumbotron jumbotron-fluid">
                    <div  className="container">
                        <h1 className="display-4 text-center">Welcome to {props.userName}'s blog</h1>
                    </div>
                </div>
            </>
        );  
}