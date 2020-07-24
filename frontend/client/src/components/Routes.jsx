import React, { Component } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import history from './history';
import Login from './Login'
import Form from './form'

export default class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route  exact path="/Home" component={Home} />
                    <Route  exact path="/Form" component={Form}/>

                </Switch>
        )
    }

}