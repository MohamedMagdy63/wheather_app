import React, { Component } from "react";

class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather} className='container'>
                <input className="addData" type='text' name='city' placeholder="City...."/>
                <input className="addData" type='text' name='country' placeholder="Country...."/>
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;