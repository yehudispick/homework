import React , {Component} from 'react';
import BlogList from './BlogList';
import PostsList from './PostsList';
import Title from './Title';

export default class App extends Component {

  state={
    users: []
  }
  componentDidMount(){
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
          users: users
        })
      })
      .catch(err => console.error(err));
  }
  handleSelectedBlog=(user)=>{
    this.setState({
      selectedBlog: user,
    })  
  }
  changeName=(user)=>{
    this.setState({
      name: user
    })  
  }
 
  render(){
    const blogPost= this.state.selectedBlog?
      <PostsList  userId={this.state.selectedBlog}/>:
      <h2>Please select on a blog to read</h2>
    const title = this.state.name?
      <Title userName={this.state.name}/>:
      null


      return (
      <div className="App">
        <BlogList users={this.state.users} onSelectedBlog={this.handleSelectedBlog} showName={this.changeName}/>
        <hr/>
        {title}
        {blogPost}
      </div>
    );
  }
 
}
