import React from 'react'

export default function Login() {
  return <>
          <div className="w-75 mx-auto py-5">
            <h2>Login Form</h2>
            <form className='my-4'>
                <label htmlFor="email">email</label>
                <input id='email' type="text" placeholder='email' className='form-control mb-4' />
                <label htmlFor="password">password</label>
                <input id='password' type="text" placeholder='password' className='form-control mb-4' />
                <button className='btn btn-outline-info fw-bolder'>Login</button>
            </form>
        </div>
  </>
}
