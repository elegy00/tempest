import { ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';
import { Dashboard } from './components/dashBoard/Dashboard';
import apolloClient from './setup/apolloClient';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Dashboard />
    </ApolloProvider>
  );
};

export default App;
