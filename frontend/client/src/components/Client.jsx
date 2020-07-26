import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
// import Axios from 'axios'
import { api } from '../services/ApiConfig';


class Client extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          profiles: []
        }
    }
  
    componentDidMount(){
      this.getProfiles()
    }
  
    getProfiles = async () => {
      try{
        const response = await api.get('/profiles')
        console.log('response', response)
        const data = response.data
        this.setState({
          profiles: data
        })
      }catch(error){
        throw (error.response)
      }
    }
  
    renderProfiles(){
      return(
        this.state.profiles.map((profile) =>{
          return(
            <div className ="client-card">
              
              <h2>{profile.name}</h2>
              <h4>Email: {profile.email}</h4>
              <p1>Phone number: {profile.phone}</p1>
              <p1>Street address: {profile.address}</p1>
              <p1>City: {profile.city}</p1>
              <p1>State: {profile.state}</p1>
              <p1>Zipcode: {profile.zipcode}</p1>

            
              <p1>Checked in: {profile.checkedin === false ? "NO" : "YES" }</p1>
              

      
              </div>
            
          )
        })
      )
    }
  

    render(){
	return(
		<div className='client-container'>
                <div className ="profile-container">
        <span class="dot"></span>
        <div className="profile-info">
          <h1 className="profile-info3">Hi Octagon!</h1>
          <h1 className="profile-info4">GOing Since 2017</h1>
        </div>
        </div>
        <hr className ="line"/>
            <p3 classname ="octo-title">ATTENDEE PROFILES</p3>
            <div className ="profiles">{this.renderProfiles()}</div>

        </div>
	)
}
}
export default Client;
