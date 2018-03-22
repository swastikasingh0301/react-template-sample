import React, { Component } from "react";
import {SERVICETEXT} from './bodyservicemsg';

class BodySecond extends React.Component{
    render(){
        return(
            <div>
            <div className="body-div-bottom">
                <div className="header-bottom">
                    <img src="src\Images\logoPluton.png"/>
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
                        <img src="src\Images\modernDesign.jpg" />   
                    </span>
                    <span>
                        <img src="src\Images\powerfullTheme.png" />    
                    </span>
                    <span>
                        <img src="src\Images\cleanCode.png" />    
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
                <div className="body-div-msg">
                    <span>
                        <p>{SERVICETEXT.modernDesignText}</p>
                    </span>
                    <span>
                        <p>{SERVICETEXT.powerfullThemeText}</p>
                    </span>
                    <span>
                        <p>{SERVICETEXT.cleanCodeText}</p>
                    </span>
                </div>
            </div>
            </div>
        )
    }

}

export default BodySecond;