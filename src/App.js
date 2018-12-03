import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './routes';
import './App.css';

class App extends Component {

  render() {
 
    return (
      <div>
        <Header title="To-Do List App"/>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
