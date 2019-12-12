import React, { Component } from 'react';

export default class TickerInput extends Component{
    
    handleSubmit=(event)=> {

        event.preventDefault();
        this.props.fetch(event);
      }
      
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >Enter Stock Ticker Symbol:</span>
                    </div>
                    <input type="text" name="ticker" value={this.props.value} onChange={this.props.handleInputChange}/>
                    <button className="btn btn-primary" type="submit" >Update</button>
                </div>
                
            </form>
        );
    }
}