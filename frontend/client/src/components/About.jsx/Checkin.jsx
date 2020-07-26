import React from 'react'
import { api } from '../services/ApiConfig'

export default class AddProfile extends React.Component {
    constructor() {
        super()
        this.state = {
           checkedin:'',
      
    
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
            checkedin:this.state.checkedin,
           
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
                 
                    <button type="submit" value="Add" className='submit-button'>Add</button>
                </form>
                </div>
            </div>
        )
    }
}