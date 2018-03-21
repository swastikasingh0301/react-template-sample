import React, { Component } from "react";

class BodySecond extends React.Component{
    render(){
        return(
            <div>
            <div className="body-div-bottom">
                <div className="header">
                    <img src="F:\gitSampleRep\template-creation\Images\logoPluton.png"/>
                    <span>Contact</span>
                    <span>Price</span>
                    <span>Clients</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Services</span>
                    <span>Home</span>
                </div>
                <div className="bottom-header">
                    <h3>What Do We Do?</h3>
                    <p>This is just a sample template!</p>
                    <hr />
                </div>
                <div className="body-div-img">
                    <span>
                        <img src="F:\gitSampleRep\template-creation\Images\img2.jpg" />   
                    </span>
                    <span>
                        <img src="F:\gitSampleRep\template-creation\Images\img1.png" />    
                    </span>
                    <span>
                        <img src="F:\gitSampleRep\template-creation\Images\img3.png" />    
                    </span>
                </div>
                <div className="body-div-text">
                    <span>
                        <b>Modern Design</b>
                    </span>
                    <span>
                        <b>Powerful Theme</b>
                    </span>
                    <span>
                        <b>Clean Code</b>
                    </span>
                </div>
            </div>
            </div>
        )
    }

}

export default BodySecond;