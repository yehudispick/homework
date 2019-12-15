import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import NoteDetails from './NoteDetails';
import Note from './Note'
import Header from './Header'
import AddNote from './AddNote';
import EditNote from './EditNote'

class App extends Component{

  state = {
    notes:[],
    currentlySelected: null,
    id: 0
  }
  getNotes(){
    return this.state.notes.map((note, index) =><Note key={index} note={note}/>);
  }
  handleDelete = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
  handleEdit = (note, id) => {
     
    const oldNotes = this.state.notes.filter(note => note.id !== id)
    this.setState({
      id: this.state.id + 1,
    })
    note.id = this.state.id;
    const notes =[...oldNotes, note]; 
    this.setState({
      notes: notes,
    })
    
  }
  findNote = match =>{
    const currentlySelected = this.state.notes.find(n=>n.id === +match.params.noteId)
  
    return currentlySelected
  }
  
  handleAddNote = note =>{
    this.setState({
      id: this.state.id + 1,
    })
    note.id = this.state.id;
    const notes =[...this.state.notes, note]; 
    this.setState({
      notes: notes,
      currentlySelected: note
    })
  }
  
  getNoteDetails(match){
    const currentlySelected = this.state.notes.find(n=>n.id === +match.params.noteId)
    return(
      currentlySelected ?
      <NoteDetails note={currentlySelected}  onDelete={this.handleDelete}/>:
     null
    )
  }
  render(){
    const notes =this.getNotes();
  
      return (
        
      
        <BrowserRouter>
          <div className="container">
            <div>
              <Header/>
              <hr/>
              <Switch>
                  <Route  path="/notes/"  render ={()=>notes}/>
                  <Route path="/note/:noteId" render ={({ match }) => this.getNoteDetails(match)}/>
                  <Route path="/add" render={routeProps =><AddNote onAddNote={this.handleAddNote} {...routeProps} />}/>
                  <Route path="/edit/:noteId" render={routeProps =><EditNote onEditNote={this.handleEdit} note={this.findNote(routeProps.match)}  {...routeProps}/>}/>
                  <Redirect  to="notes"/>
              </Switch>
            </div>
          </div>
        </BrowserRouter> 
   
    );
  }
}

export default App;
