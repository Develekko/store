import React from 'react'

export default function Register() {
    return <>
        <div className="w-75 mx-auto">
            <h2>Registeration Form</h2>
            <form className='my-4'>
                <label htmlFor="first_name">First Name</label>
                <input id='first_name' type="text" placeholder='First name' className='form-control mb-4' />
                <label htmlFor="last_name">Last Name</label>
                <input id='last_name' type="text" placeholder='Last name' className='form-control mb-4' />
                <label htmlFor="age">age</label>
                <input id='age' type="text" placeholder='age' className='form-control mb-4' />
                <label htmlFor="email">email</label>
                <input id='email' type="text" placeholder='email' className='form-control mb-4' />
                <label htmlFor="password">password</label>
                <input id='password' type="text" placeholder='password' className='form-control mb-4' />
                <button className='btn btn-outline-info fw-bolder'>Register</button>
            </form>
        </div>
    </>
}
