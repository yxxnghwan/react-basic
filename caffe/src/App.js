import React from 'react';
import {Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Order from './pages/Order';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={Order} />
      </Switch>
    </div>
  );
}

export default App;
