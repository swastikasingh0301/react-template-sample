import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";

class Header extends React.Component { 
    render(){
        return(
            <div className="header">
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

export default Header;