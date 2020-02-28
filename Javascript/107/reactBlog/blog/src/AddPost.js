import React, {Component} from 'react'
import './AddPost.css'

export default class AddPost extends Component{
        state={}
        render(){
            return(
                <>
               
                <label>Title: 
                        <input name="title" value={this.state.title} onChange={this.handleTitle}/>
                    </label>
                    <label>Content:  
                        <textarea name="content" value={this.state.content} onChange={this.handleContent}></textarea>
                    </label>
                <button onClick={this.addPost}>Submit</button>

                </>
            )
        }
    
        addPost = async () =>{
            try{
                const resp = await fetch(`http://localhost/posts`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.post)
                });
    
                if(!resp.ok){
                    return console.error(resp.statusText)
                }
                
                
            }catch(e){
                console.error(e)
            }
           
        }
        handleTitle =(e) =>{
            let value = e.target.value;
            this.setState( prevState => ({ 
                post : {
                    ...prevState.post, 
                    title: value
                 }
               }))
        }
        handleContent =(e) =>{
            let value = e.target.value;
            this.setState( prevState => ({ 
                post : {
                    ...prevState.post, 
                    content: value
                 }
               }))
        }
        
    }