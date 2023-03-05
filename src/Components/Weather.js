import React, { Component } from "react";

class Weather extends Component{
    render(){
        return(
            <div className="info">
                {
                    this.props.city && 
                    <p className="infoKey">City :
                        <span className="infoValue"> {this.props.city}</span>
                    </p>
                }
                {
                    this.props.country && 
                    <p className="infoKey">Country :
                        <span className="infoValue"> {this.props.country}</span>
                    </p>
                }
                {
                    this.props.humidity && 
                    <p className="infoKey">Humidity :
                        <span className="infoValue"> {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description &&
                    <p className="infoKey">Description :
                        <span className="infoValue">  {this.props.description}</span>
                    </p>
                }
                {
                    this.props.temperature &&
                    
                    <p className="infoKey">Temperature :
                        <span className="infoValue">  {this.props.temperature}</span>
                    </p>
                }
                {
                    
                    this.props.error &&
                    <p className="infoKey">Error : 
                        <span className="infoValue">   {this.props.error}</span>
                    </p>
                }
            </div>
        )
    }
}

export default Weather;