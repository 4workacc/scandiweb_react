import React, { Component } from 'react';
import './App.css';
import BasketPage from './components/BasketPage';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { IStore } from './types';
import { connect } from 'react-redux';

type TProps = {
  curPage?: string;
}

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})
class App extends Component<TProps> {
  render(){
    return (
      <ApolloProvider client={client}>
        { this.props.curPage }
        <div className="App">
          <NavBar />
          { this.props.curPage === "products" && <Products client = {client}/> }
          { this.props.curPage === "product" && <ProductPage client = {client} /> }
          { this.props.curPage === "basket" && <BasketPage /> }
        </div>
      </ApolloProvider>
    )
  } 
}

const mapStateToProps = (state: IStore) => ({
  curPage: state.curPage
})

export default connect(mapStateToProps)(App);
