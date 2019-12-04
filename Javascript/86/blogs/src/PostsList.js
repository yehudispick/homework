import React, {Component} from 'react';
import Post from './Post';

const NUM_OF_POSTS = 3;

export default class PostsList extends Component{
    state={
        posts:[],
        postIndex: 0,
        loading: false,
        error: null
    }
    fetchPost=()=>{
      this.setState({
        loading: true
      })
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId.id}`)
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
              posts: posts,
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
    componentDidMount(){
      this.fetchPost();
    }
    componentDidUpdate(prevprops){
      const previd=prevprops.userId
      if(this.props.userId !== previd){
        this.fetchPost()
      }
    }

    handlePrevious =()=>{
      this.setState({
        postIndex: this.state.postIndex - NUM_OF_POSTS
      })
    }
    
    handleNext = () => {
      this.setState({
        postIndex: this.state.postIndex + NUM_OF_POSTS
      })
    }

    render(){
      if(this.state.loading){
        return <h4 className="loading">loading...</h4>
      }
      if(this.state.error){
        return <h4 className="error">{this.state.error}</h4>
      }
      return(
            <>
              <div className="jumbotron jumbotron-fluid">
                  <div  className="container">
                    <h1 className="display-4 text-center">Welcome to {this.props.userId.name}'s Blog</h1>
                  </div>
              </div>
            {this.state.posts
              .slice(this.state.postIndex, this.state.postIndex + NUM_OF_POSTS)
              .map(post => <Post key={post.id} post ={post}/>)}
            <button disabled={ this.state.postIndex === 0} onClick={this.handlePrevious}>Previous</button>
            <button  disabled={ this.state.postIndex > this.state.posts.length - NUM_OF_POSTS} onClick={this.handleNext}>Next</button></>
            
            

        );
    }
}