import React from 'react'
import { api } from '../services/ApiConfig'
import { Route, NavLink, Switch } from 'react-router-dom'


export default class AddProfile extends React.Component {
    constructor() {
        super()
        this.state = {
           name: '',
           email:'' ,
           address: '',
           city: '',
           state: '',
           zipcode: '',
           phone: ''
    
        }
    }
    onChange = (e) => {

        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = async(e) => {
        // e.preventDefault()
        await api.post('/profiles', {
            name:this.state.name,
            email:this.state.email,
            license: this.state.license,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            phone: this.state.phone,
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className='form'>
            <div className='form-title'>
            <h1>Personal Information</h1>
            </div>  
            <div className='form-content'>  
                <form onSubmit={this.onSubmit}>
                  
                 <label> NAME
                      <input className ="ticketformbtn"
                        type="text"
                        name="name"
                        placeholder='name'
                        value={this.state.name}
                        onChange={(e) => this.onChange(e)} /> 
                        </label> 
                        <label>EMAIL
                    <input className ="ticketformbtn"
                        type="text" 
                        value={this.state.email} 
                        placeholder='email'
                        name="email" 
                        onChange={(e) => this.onChange(e)} />
                        </label>
                        <label>ADDRESS
                    <input className ="ticketformbtn"
                        type="text" 
                        value={this.state.address} 
                        placeholder='address'
                        name="address" 
                        onChange={(e) => this.onChange(e)} /> 
                        </label>
                        <label>CITY
                    <input className ="ticketformbtn"
                        type="text" 
                        value={this.state.city} 
                        placeholder='city'
                        name="city" 
                        onChange={(e) => this.onChange(e)} /> 
                        </label>
                        <label>STATE
                    <input className ="ticketformbtn"
                        type="text" 
                        value={this.state.state} 
                        placeholder='state'
                        name="state" 
                        onChange={(e) => this.onChange(e)} /> 
                        </label>
                        <label> ZIPCODE
                    <input className ="ticketformbtn"
                        type="text" 
                        value={this.state.zipcode} 
                        placeholder='zipcode'
                        name="zipcode" 
                        onChange={(e) => this.onChange(e)} /> 
                        </label>
                        <label> PHONE
                    <input className ="ticketformbtn"
                        type="text" 
                        value={this.state.phone} 
                        placeholder='phone'
                        name="phone" 
                        onChange={(e) => this.onChange(e)} /> 
                        </label>
                        <button  type="submit" value="Add" className='submit-button'>BUY TICKET</button>
                        <NavLink exact path to='/clientprofiles'><button  type="" value="Add" className='submit-button2'>Client Interface</button></NavLink>
                </form>
                </div>
            </div>
        )
    }
}