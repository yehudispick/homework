import React , {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import BlogList from './BlogList';
import PostsList from './PostsList';
import Header from './Header'

export default class App extends Component {
  state={
    selectedBlog: null
  }
 
  handleSelectedBlog=(user)=>{
    this.setState({
      selectedBlog: user,
    })  
  }
  handleGoHome=()=>{
    this.setState({
      selectedBlog: null
    })

  }
  /*getRecipeDetails(match){
    const currentlySelected = this.state.blogs.find(r=>r.id === +match.params.recipeId)
    return(
      currentlySelected ?
      <RecipeDetails recipe={currentlySelected}/>:
      <h3>Please choose one of our delicious recipes</h3>

    )
  }*/
  
 
  render(){
    //could also do this.state.selectedBlog && <PostList ... 
    //if no selected blog then shortcircut and not render postList
    const blogPosts= this.state.selectedBlog?
      <PostsList  userId={this.state.selectedBlog}/>:
      null      
      return (
        <BrowserRouter>
          <div>
            <Header onGoHome={this.handleGoHome}/>
            <hr/>
            <Switch>
             
              <Route path='/blogs/' render={routeProps => <BlogList users={this.state.users} onSelectedBlog={this.handleSelectedBlog} {...routeProps}/>} />
              
              <Route path='/blog/:userId' render={()=>blogPosts} />
              <Redirect  to="/blogs"/>
            </Switch>
          </div>
        </BrowserRouter>
          
    );
  }
 
}
