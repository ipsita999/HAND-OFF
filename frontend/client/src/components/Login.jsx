import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import history from "./history"



const Login = () => {
    return (
        <div className="Login">


            <form className="login-form">
                <label>
                    EMAIL OR PHONE
    <input className="textbox1" type="text" name="name" />
                </label>
                <label>
                    PASSWORD
    <input className="textbox2" type="text" name="name" />
                </label>

            </form>

            <NavLink exact path to='/Home'><button className="login-btn" variant="btn btn-success">SUBMIT</button></NavLink>
          <NavLink exact path to='/Home'>  <button className="login-btn" >SIGN UP WITH CODE</button> </NavLink> 

        </div>
    )
}

export default Login

