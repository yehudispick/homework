import React,{Component} from 'react';

export default class Weather extends Component {
    render(){ 
      const  {location, picture, description}=this.props.weatherInfo
      return (
        <>
            <div>
                <h3> The weather in <span>{location}</span></h3>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${picture}@2x.png`}/>        
            </div>
            <div >
                <h3>{description}</h3>
            </div>
         
        </>
      );
    }
  }