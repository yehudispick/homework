import React,{Component} from 'react';

export default class ZipInput extends Component {
    render(){ 
      return (
        <>
        <span>Type in a 5 digit Zipcode: </span>
         <input type="number" onBlur={this.props.getTheWeatherFunction} />
        </>
      );
    }
  }
