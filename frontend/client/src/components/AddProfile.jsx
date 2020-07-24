import React from 'react'
import { api } from '../services/ApiConfig'

export default class AddProfile extends React.Component {
    constructor() {
        super()
        this.state = {
           img:'',
           name: '',
           email:'' ,
           name: '',
           license: '',
           address: '',
           city: '',
           state: '',
           zipcode: '',
           phone: '',
    
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
            img:this.state.img,
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
            <h1>Information</h1>
            </div>  
            <div className='form-content'>  
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="img" 
                        placeholder='image'
                        value={this.state.img}
                        onChange={(e) => this.onChange(e)} />
                    <input 
                        type="text"
                        name="name"
                        placeholder='name'
                        value={this.state.name}
                        onChange={(e) => this.onChange(e)} />
                    <input 
                        type="text" 
                        value={this.state.email} 
                        placeholder='email'
                        name="email" 
                        onChange={(e) => this.onChange(e)} />
                    <input 
                        type="text" 
                        value={this.state.license} 
                        placeholder='license'
                        name="license" 
                        onChange={(e) => this.onChange(e)} />  
                    <input 
                        type="text" 
                        value={this.state.address} 
                        placeholder='address'
                        name="address" 
                        onChange={(e) => this.onChange(e)} /> 
                    <input 
                        type="text" 
                        value={this.state.city} 
                        placeholder='city'
                        name="city" 
                        onChange={(e) => this.onChange(e)} /> 
                    <input 
                        type="text" 
                        value={this.state.state} 
                        placeholder='state'
                        name="state" 
                        onChange={(e) => this.onChange(e)} /> 
                    <input 
                        type="text" 
                        value={this.state.zipcode} 
                        placeholder='zipcode'
                        name="zipcode" 
                        onChange={(e) => this.onChange(e)} /> 
                    <input 
                        type="text" 
                        value={this.state.phone} 
                        placeholder='phone'
                        name="phone" 
                        onChange={(e) => this.onChange(e)} /> 
                    <button type="submit" value="Add" className='submit-button'>Add</button>
                </form>
                </div>
            </div>
        )
    }
}