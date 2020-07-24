import React from 'react'

const form = (props) => {
	return(
		<form className='form' onSubmit ={props.onSubmit}>
			<input name='image' value={props.img} placeholder='image' onChange={props.onChange}/>
			<input name='name' value={props.name} placeholder='name' onChange={props.onChange}/>
			<input name='email' value={props.email} placeholder='email' onChange={props.onChange}/>
            <input name='name' value={props.name} placeholder='name' onChange={props.onChange}/>
            <input name='license' value={props.license} placeholder='license' onChange={props.onChange}/>
            <input name='city' value={props.city} placeholder='city' onChange={props.onChange}/>
            <input name='state' value={props.state} placeholder='state' onChange={props.onChange}/>
            <input name='zipcode' value={props.zipcode} placeholder='zipcode' onChange={props.onChange}/>
            <input name='phone' value={props.phone} placeholder='phone' onChange={props.onChange}/>
        </form>
	)
}
export default form;