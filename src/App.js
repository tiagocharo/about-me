import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
          <About />
      </ApolloProvider>
    );
  }
}

export default App;
