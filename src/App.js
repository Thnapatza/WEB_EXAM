import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home.component';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Second from './component/Second.component';
import {BasicRouting,Content,Blocking,Miss,NoMatch,QueryParams,Recursive,Login,ProtectedPage,CounterPage,FetchPage} from './component';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/Home" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/Second" activeClassName="active">Redux store</NavLink></li>
              
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              
                        <Route path="/Home" component={Home}/>
                        <Route path="/Second" component={Second} />
                        
              
                
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
