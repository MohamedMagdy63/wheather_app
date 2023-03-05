import React,{Component} from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.css';

const API_KEY='e36ed364400282e43250b6c4c0274d44'
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state={
    city:'',
    country:'',
    humidity:'',
    description:'',
    temperature:'',
    error:''
  }
  getWeather = async(e)=>{
    e.preventDefault()
    const city =e.target.elements.city.value
    const country =e.target.elements.country.value
    console.log(city)
    console.log(country)
    const apiFetch =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
    const apiJson = await apiFetch.json()
    console.log(apiJson)
    if(city && country){
      this.setState({
        city:apiJson.name,
        country:apiJson.sys.country,
        humidity:apiJson.main.humidity,
        description:apiJson.weather[0].description,
        temperature:apiJson.main.temp,
        error:''
      })
    }else{
      this.setState({
        city:'',
        country:'',
        humidity:'',
        description:'',
        temperature:'',
        error:'Plz enter data'
      })
    }
  }
  render(){
    return (
      <div className="wrapper">
       <div className='formContainer'>
       <Form getWeather={this.getWeather}/>
        <Weather
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          temperature={this.state.temperature}
          error={this.state.error}
        />
       </div>
      </div>
    );
  }
}

export default App;
