import React, {Component} from 'react';
import BlogInfo from './BlogInfo';

export default class BlogList extends Component{
    state={
        users: [],
        loading: false,
        error: null
    }
  componentDidMount(){
      this.setState({
          loading: true
      })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...Failed to fetch the blog');
        }
      })
      .then(users => {
        console.log(users)
        this.setState({
          users: users,
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
      if(this.state.loading){
          return <h4 className="loading">loading...</h4>
      }
      if(this.state.error){
        return <h4 className="error">{this.state.error}</h4>
      }
      return(
            <>{ this.state.users.map(blog => 
                 <BlogInfo key ={blog.id} user={blog} onSelectedBlog = {this.props.onSelectedBlog}/>
                )}
            </>
      )
  }
}