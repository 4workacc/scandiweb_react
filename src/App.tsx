import React, { Component } from 'react';
import './App.css';
import { gql } from '@apollo/client';

interface IProps {
  client: any
}
class App extends Component<IProps> {
  componentDidMount(){
    this.props.client.query({
      query: gql`
        query {
          products {
              id
              title
              subtitle
              price            
          }
      }
      `
    }).then(
      (res: any) => console.log(res) 
    )
  }
  render() {
    return (
      <div className="App">        
      </div>
    );
  }  
}

export default App;
