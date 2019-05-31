import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tab from './pages/tab/Tab'
import uiData from './data/ui.json';

class App extends React.Component {
  public getRouteUrls() {
    return uiData.map((v) => {
      return <Route exact path={v.route} component={Home} />
    })

  }
  render() {
    return (
      <div className="container">
        <Router>
          <Tab />
          {this.getRouteUrls()}
        </Router>
      </div>
    )
  }
}


export default App;
