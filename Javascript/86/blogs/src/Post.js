import React, {Component} from 'react';
import Comment from './Comment';

export default class Post extends Component{
    state = {
        commentsShowing: false,
        loading: false,
        error: null
    };
    toggleComments =()=>{
        if(!this.state.comments){
            this.loadComments();
        }
        this.setState({
            commentsShowing: ! this.state.commentsShowing
        })
    }
    loadComments(){
        this.setState({
            loading: true
        })
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...Failed to fetch the blog');
            }
        })
        .then(comments => {
            this.setState({
                comments: comments,
                loading: false
            })
        })
        .catch(err => {
            console.error(err);
            this.setState({
                loading: false,
                error: err.message ? err.message : 'Failed to load'
            })
        });
    }
    render(){
        let comments;
        const {post}= this.props;
        if(this.state.loading){
            comments = <h4 className = "loading">loading...</h4>
        }
        if(this.state.error){
            comments = <h4 className = "error">{this.state.error}</h4>
        }
        
        else if(this.state.commentsShowing && this.state.comments){
            comments = <div> 
                            {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                        </div>
        }
        
        return(
            <>
                <div key={post.id} id = "post" className="list-group-item list-group-item-action"> 
                    <h2 className="mb-1">{post.title}</h2>
                    <p className="mb-1">{post.body}</p>
                    <button id="ShowHideComments"  className="btn btn-primary btn-sm text-right" onClick={this.toggleComments}>{this.state.commentsShowing ? 'Hide': 'Show'}  comments</button>
                    <div>{comments}</div>
                </div> 
            </>
        )
    }
    
}