import React, { Component } from 'react';
import '../App.css';
import { Jumbotron } from 'react-bootstrap';


class Firstpage extends Component {
  
  render() {
    return (    
      <div>
        <Jumbotron >      
        <p>
          This is a sample To-Do App to save the things to do
        </p>
        <p>
          <a href="/login" className="btn btn-primary" style={{margin:20}}>Login</a>
          <a href="/signup" className="btn btn-success">Sign Up</a>
        </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Firstpage;
