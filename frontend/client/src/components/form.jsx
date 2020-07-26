
import React from 'react'

const form = (props) => {
	return(
		<form className='event-form' onSubmit ={props.onSubmit}>
			<input name='name' value={props.name} placeholder='name' onChange={props.onChange}/>
			<input name='email' value={props.email} placeholder='email' onChange={props.onChange}/>
            <input name='address' value={props.address} placeholder='address' onChange={props.onChange}/>
            <input name='city' value={props.city} placeholder='city' onChange={props.onChange}/>
            <input name='state' value={props.state} placeholder='state' onChange={props.onChange}/>
            <input name='zipcode' value={props.zipcode} placeholder='zipcode' onChange={props.onChange}/>
            <input name='phone' value={props.phone} placeholder='phone' onChange={props.onChange}/>
        </form>
	)
}
export default form;
