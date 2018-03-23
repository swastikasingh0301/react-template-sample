import React, { Component } from "react";
import {SERVICETEXT} from './bodyservicemsg';
import { Link, Route, Switch } from "react-router-dom";

class BodySecond extends React.Component{
    render(){
        return(
            <div>
            <div className="body-div-bottom">
                <div className="header-bottom">
                <img src="src\Images\logoPluton.png"/>
                <span><Link to='/Contact'>Contact</Link></span>
                <span><Link to='/Price'>Price</Link></span>
                <span><Link to='/Clients'>Clients</Link></span>
                <span><Link to='/About'>About</Link></span>
                <span><Link to='/Portfolio'>Portfolio</Link></span>
                <span><Link to='/Services'>Services</Link></span>
                <span><Link to='/'>Home</Link></span>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Price" component={Price} />
                    <Route exact path="/Clients" component={Clients} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/Services" component={Services} />
                </Switch>
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

const Home = props => (
    <div>
      <h2>Home {console.log(props)}</h2>
    </div>
  );

const Services = props => (
    <div>
      <h2>Services {console.log(props)}</h2>
    </div>
);

const Portfolio = props => (
    <div>
      <h2>Portfolio {console.log(props)}</h2>
    </div>
);

const About = props => (
    <div>
      <h2>About {console.log(props)}</h2>
    </div>
);

const Clients = props => (
    <div>
      <h2>Clients {console.log(props)}</h2>
    </div>
);

const Price = props => (
    <div>
      <h2>Price {console.log(props)}</h2>
    </div>
);

const Contact = props => (
    <div>
      <h2>Contact {console.log(props)}</h2>
    </div>
);

export default BodySecond;