import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import history from "./history"
import logo from "./resources/go.png"



const Login = () => {
    return (
        <div className="Login">
            <img  classname = "logo" src="https://i.ibb.co/xMfv55P/go.png"></img>


            <form className="login-form">
                
                <label>
                    EMAIL OR PHONE
    <input className="textbox1" type="text" name="name"  />
                </label>
                <label>
                    PASSWORD
    <input className="textbox2" type="password" name="password" />
                </label>

            </form>

            <NavLink exact path to='/Home'><button className="login-btn" variant="btn btn-success">LOGIN</button></NavLink>
          <NavLink exact path to='/Home'>  <button className="login-btn" >SIGN UP WITH CODE</button> </NavLink> 
          <NavLink exact path to='/Home'>  <button className="login-btn" >LEARN-MORE</button> </NavLink> 

        </div>
    )
}

export default Login

