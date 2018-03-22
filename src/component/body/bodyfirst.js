import React, { Component } from "react";
import {TEMPLATETEXT} from './bodytextmsg';

class BodyFirst extends React.Component{
    render(){
        return(
            <div className= "body-div">
                <div className="body-left">
                    <h2>{TEMPLATETEXT.headerText}</h2>
                    <h4>{TEMPLATETEXT.headerMsg}</h4>
                    <p>{TEMPLATETEXT.text}</p>
                    <button>Download</button>
                </div>
                <div className = "body-right">
                    <img src="src\Images\Slider02.png" alt="mobileImg" />
                </div>
            </div>
        )
    }

}

export default BodyFirst;