import React, {Component} from 'react';
import ZipInput from "./ZipInput";
import Weather from "./Weather";

export default class App extends Component {
  state ={
    weatherInfo:[],
    error:null
  }

  getTheWeatherFunction=(e)=> {
    const zip = e.target.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=24860b9621b577d21aa1516f4cdb8ce5&zip=${zip}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ... Check your network, or it is invalid zipcode');
      }
    })
    .then(weatherData =>{    
      this.setState({
        weatherInfo:{
          location: weatherData.name,
          picture: weatherData.weather[0].icon,
          description:`${weatherData.main.temp} and ${weatherData.weather[0].description}`
        }
      })
      
    })
    .catch(error => this.setState({ error}));
  }

  render(){
    const  zipInput = <ZipInput getTheWeatherFunction={this.getTheWeatherFunction}/>
    const weather = this.state.weatherInfo ? <Weather weatherInfo={this.state.weatherInfo}/> : null;
   if(this.state.error){
     return <p>{this.state.error.message}</p>;
   }
    return (
      <div className="container">
        <div className="text-center">
          <h1>Weather</h1>
          <hr />
          {zipInput}
          <hr />
          {weather}
        </div>
      </div>
    );
  }
}


