import React, { Component } from 'react';
import { Router } from "react-router"; 

class Header extends React.Component { 
    render(){
        return(
            <div className="header">
                <img src="src\Images\logoPluton.png"/>
                <span>Contact</span>
                <span>Price</span>
                <span>Clients</span>
                <span>About</span>
                <span>Portfolio</span>
                <span>Services</span>
                <span>Home</span>
            </div>
        )
    }
}

export default Header;