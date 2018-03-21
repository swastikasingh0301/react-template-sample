import React, { Component } from 'react';
import Header from '../component/header';
import BodyFirst from '../component/body/bodyfirst';
import BodySecond from '../component/body/bodysecond';

class Person extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <React.Fragment>
          <Header className="header"/>
          <BodyFirst />
          <BodySecond />
        </React.Fragment> 
      );
    }
  }
  
  export default Person;