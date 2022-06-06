import React, { Component } from 'react';
import './App.css';
import BasketPage from './components/BasketPage';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

type TProps = {

}

type TState = {
  curPage: string;
}

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})
class App extends Component<TProps, TState> {
  state: TState = {
    curPage: "products"
  }
  componentDidMount(){
    
  }
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />
          { this.state.curPage === "products" && <Products client = {client}/> }
          { this.state.curPage === "product" && <ProductPage /> }
          { this.state.curPage === "basket" && <BasketPage /> }
        </div>
      </ApolloProvider>
    )
  } 
}

export default App;
