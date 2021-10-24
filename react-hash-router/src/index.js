// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import './index.css';

function Home(){
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

function Topics(){
    return (
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    );
}

function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App(){
    return (
        <div>
            <h1>React Router DOM</h1>
            <ol>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/topics" exact>Topics</NavLink></li>
                <li><NavLink to="/contact" exact>Contact</NavLink></li>
            </ol>
            <Switch>
                <Route path="/topics" component={Topics} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/" component={Home} exact />
            </Switch>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
document.getElementById('root'));