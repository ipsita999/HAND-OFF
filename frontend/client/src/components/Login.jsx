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

            <button className="login-btn" variant="btn btn-success" onClick={() => history.replace('/Home')}>SUBMIT</button>
            <button className="login-btn" variant="btn btn-success" onClick={() => history.push('/Home')}>SIGN UP WITH CODE</button>

        </div>
    )
}

export default Login

