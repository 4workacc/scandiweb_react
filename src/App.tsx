import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <Products />
      </div>
    )
  } 
}

export default App;
