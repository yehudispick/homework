import React, { Component } from 'react';

import StockInfo from './StockInfo';
import TickerInput from './TickerInput'
import Header from './Header';
import CompanyInfo from './CompanyInfo';

class App extends Component {
  state ={
    value: ''
};

fetch =()=>{
 
  setInterval(() => {
        fetch(`https://api-v2.intrinio.com/securities/${this.state.value}/prices/realtime?api_key=OmFjOWI3ZDRlYzlkNzY5NzBiZWE3YmM3YzJmNGQyMTg5`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...Failed to fetch the Stock Prices');
            }
        })
        .then( data => {
           
            this.setState({
                stockInfo: data
                
            })
        })
        .catch(err => {
            console.error(err);
        });

        

        fetch(`https://api-v2.intrinio.com/companies/${this.state.value}?api_key=OmFjOWI3ZDRlYzlkNzY5NzBiZWE3YmM3YzJmNGQyMTg5`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...Failed to fetch the Company information');
            }
        })
        .then( data => {
            console.log(data)
            this.setState({
                companyInfo: data
                
            })
        })
        .catch(err => {
            console.error(err);
        });
        
        
      }, 3000)
        
    
}


componentDidUpdate(){
  clearInterval(fetch)
    this.fetch(); 
 
}
    
handleInputChange=(event)=> {
    this.setState({
      value: event.target.value
    });
}

  
  
  render(){
    const stockInfo = this.state.stockInfo ?
      <StockInfo stockInfo={this.state.stockInfo}/>:
      <h4>Please enter a ticker symbol to see stock prices</h4>
    return (
      <>
        <Header/>
        <TickerInput ticker={this.state.value} handleInputChange={this.handleInputChange} fetch={this.fetch}/>
        <hr/>
        {stockInfo}
        {this.state.companyInfo &&<CompanyInfo companyInfo={this.state.companyInfo}/>}
      </>
    )
  }
}

export default App;
