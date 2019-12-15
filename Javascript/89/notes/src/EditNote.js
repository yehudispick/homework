import React, {Component} from 'react';
import './AddNote.css'

export default class EditNote extends Component{
    state={
        title: this.props.note.title,
        details: this.props.note.details
       
    }
    handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    cancel=()=>{
        this.setState({
          title: this.props.note.title,
          details: this.props.note.details
          });
    }
    handleSubmit=event =>{
        event.preventDefault();
    
        this.props.onEditNote({ 
            title: this.state.title,
            details: this.state.details,
           
        }, this.props.note.id);
        this.props.history.push('/notes')
    }
    
    render(){
    
        return(
            <form  onSubmit={this.handleSubmit} className="add-note">
                <label>Title: <input name="title" value={this.state.title} onChange={this.handleInputChange}/></label>
                <label>Details: <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/></label>
            
                <button>Save Note</button>
                <button onClick={this.cancel}>Cancel</button>
            </form>
        )
    }
}