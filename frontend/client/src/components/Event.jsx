import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Axios from 'axios'
import { api } from '../services/ApiConfig'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        events: []
      }
  }

  componentDidMount(){
    this.getEvents()
  }

  getEvents = async () => {
    try{
      const response = await api.get('/events')
      console.log('response', response)
      const data = response.data
      this.setState({
        events: data
      })
    }catch(error){
      throw (error.response)
    }
  }

  renderEvents(){
    return(
      this.state.events.map((event) =>{
        return(
          <div className ="event-container">
            <div className = "event-box"> 
            <img className ="event-pic" src={event.img}></img>
            <p1>{event.name}</p1>
            <NavLink exact path to='/AddProfile'><button className = "event-btn">buy ticket</button></NavLink>
            </div>
          </div>
          
        )
      })
    )
  }

  render(){
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
        <div className="events-container">
          <h3>Accept Invitation</h3>
          <div className ="event-container">
            <div className = "event-box"> 
            <img className ="event-pic" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
            <p1>Octagon Social</p1>
            <button className = "event-btn">RSVP</button>
            </div>
          </div>
          
          <h3>Upcoming Events</h3>
        <div className ="rend">{this.renderEvents()}</div>
        </div>
        <div className="home-navbar">
       
        <button className="nav-button"> EVENTS</button>
        <button className="nav-button">CHECK IN</button>
        </div>
        
  
      </div>
  )
  }
}

export default Event

