import React, {Component} from 'react';

export default class Posts extends Component{
    state={
        posts:[]
    }
    fetchPost=()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`)
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...Failed to fetch the posts');
            }
          })
          .then(posts => {
            console.log(posts)
            this.setState({
              posts: posts
            })
          });
    }    
    componentDidMount(){
      this.fetchPost();
    }
    componentDidUpdate(prevprops){
      const previd=prevprops.userId
      if(this.props.userId !== previd){
        this.fetchPost()
      }
    }

    render(){
      
        return(
            <>
            {this.state.posts.map(post=>
                <div key={post.id} id = "post" className="list-group-item list-group-item-action"> 
                <h2 className="mb-1">{post.title}</h2>
                <p className="mb-1">{post.body}</p>
                <button id="ShowHideComments"  className="btn btn-primary btn-sm text-right"> Show comments</button>
                <div id="comments"  className="list-group"></div>
            </div>
            )}
            </>
            
            

        );
    }
}