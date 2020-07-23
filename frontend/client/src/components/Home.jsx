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
          <>{event.name}</>
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
        <div className="events-container">events</div>
        <div className="home-navbar">
        <div>{this.renderEvents()}</div>
        <button className="nav-button"> EVENTS</button>
        <button className="nav-button">CHECK IN</button>
        </div>
        
  
      </div>
  )
  }
}

export default Home

