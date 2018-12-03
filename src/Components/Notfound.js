import React, { Component } from 'react';
import '../App.css';
import { Jumbotron } from 'react-bootstrap';;


class Notfound extends Component {
  
  render() {
    return (    
      <div>
        <Jumbotron >      
            <h1>404 Page</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Notfound;
