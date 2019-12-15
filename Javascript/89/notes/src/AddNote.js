import React, {Component} from 'react';
import './AddNote.css'

export default class AddNote extends Component{
    state={
        title:'',
        details:'',
       
    }
    handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit=event =>{
        event.preventDefault();
    
        this.props.onAddNote({ 
            title: this.state.title,
            details: this.state.details,
           
        });
        this.props.history.push('/notes')
    }
    
    render(){
        return(
            <form  onSubmit={this.handleSubmit} className="add-note">
                <label>Title: <input name="title" value={this.state.title} onChange={this.handleInputChange}/></label>
                <label>Details: <textarea name="details" value={this.state.details} onChange={this.handleInputChange}/></label>
            
                <button>Add Note</button>
            </form>
        )
    }
}