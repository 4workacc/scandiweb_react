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

class App extends Component<TProps> {
  render(){
    return (           
        <div className="App">
          <NavBar />
          { this.props.curPage === "products" && <Products /> }
          { this.props.curPage === "product" && <ProductPage /> }
          { this.props.curPage === "basket" && <BasketPage /> }
        </div>  
    )
  } 
}

const mapStateToProps = (state: IStore) => ({
  curPage: state.curPage
})

export default connect(mapStateToProps)(App);
