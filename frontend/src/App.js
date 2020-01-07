import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard'

class App extends Component{

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard}>
          </Route>
          <Route path="/" component={Login}>
          </Route>
          
        </Switch>
        </BrowserRouter>
    );
  }
}

export default App;