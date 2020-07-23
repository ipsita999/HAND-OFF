import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'



const Home = () => {
  return (
    
      <div className="Home">
        <div className ="profile-container">
        <span class="dot"></span>
        <div className="profile-info">
          <h1 className="profile-info1">OLIVIA</h1>
          <h1 className="profile-info2">GOing Since 2017</h1>
        </div>

        </div>
        <hr/>
        <div className="events-container">events</div>
        <div className="home-navbar">
        <button className="nav-button"> EVENTS</button>
        <button className="nav-button">CHECK IN</button>
        </div>

  
      </div>
    

     
   
  )
}

export default Home

