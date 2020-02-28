import React, {Component} from 'react';
import './AddComment.css'

export default class AddComment extends Component{
    render(){
        return(
          
            <div id="addComment">
                <textarea ref="content" id="comment_content"></textarea>
                <button id="cancel" onClick={this.complete}>cancel</button>
                <button id="add" onClick={this.addComment}>add comment</button>
            </div>
        )
    }

    addComment = async () =>{
        try{
            const resp = await fetch(`http://localhost/posts/${this.props.id}/comments`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: this.refs.content.value})
            });

            if(!resp.ok){
                return console.error(resp.statusText)
            }
            this.complete();
            
        }catch(e){
            console.error(e)
        }
       
    }

    complete = ()=>{
        this.props.onComplete();
    }
}