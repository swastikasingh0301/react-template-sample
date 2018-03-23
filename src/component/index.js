import React, { Component } from 'react';
import Header from '../component/header';
import BodyFirst from '../component/body/bodyfirst';
import BodySecond from '../component/body/bodysecond';
import { BrowserRouter } from "react-router-dom";

class Main extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <React.Fragment>
          
          <BrowserRouter>
            <Header />
          </BrowserRouter>
          <BodyFirst />
          <BodySecond />
        </React.Fragment> 
      );
    }
  }
  
  export default Main;