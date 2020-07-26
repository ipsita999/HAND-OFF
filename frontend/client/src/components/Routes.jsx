import React, { Component } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import history from './history';
import Login from './Login'
import Event from './Event'

import AddProfile from './AddProfile'
import Client from './Client'

export default class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route  exact path="/Home" component={Home} />
                    <Route exact path="/AddProfile" component={AddProfile}/>
                    <Route exact path="/eventdetails/:id" component={Event}/>
                    <Route exact path="/eventdetails/:id" component={Event}/>
                    <Route exact path="/clientprofiles" component={Client}/>
                    
                    
                </Switch>
        )
    }

}