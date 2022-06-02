import React, { Component } from 'react';
import './App.css';
import BasketPage from './components/BasketPage';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductPage from './components/ProductPage';

type TProps = {

}

type TState = {
  curPage: string;
}
class App extends Component<TProps, TState> {
  state: TState = {
    curPage: "products"
  }
  componentDidMount(){
    alert("ONLINE");
  }
  render(){
    return (
      <div className="App">
        <NavBar />
        { this.state.curPage === "products" && <Products /> }
        { this.state.curPage === "product" && <ProductPage /> }
        { this.state.curPage === "basket" && <BasketPage /> }
      </div>
    )
  } 
}

export default App;
