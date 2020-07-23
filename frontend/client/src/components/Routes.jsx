import React, { Component } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";

// import About from "./About.jsx";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
import Home from "./Home";
import history from './history';
import Login from './Login'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={withRouter(Login)} />
                <Route  path="/Home" exact component={withRouter(Home)} />
            
                 
                    {/* <Route path="/About" component={About} /> */}
                    {/* <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }

}