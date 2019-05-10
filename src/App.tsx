import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <Container>
      <Home/>
    </Container>
  );
}

export default App;
