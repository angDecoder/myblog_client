import React from 'react';
import './Auth.css';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div id='Auth'>
      <h1>Login User</h1>
      
      <form>
        <input className='form-input' type="text" id="username" placeholder='Email' />
        <input className='form-input' type="password" placeholder='Password' />
        <div>
          <button className='form-btn' data-btn='green'>Submit</button>
          <button className='form-btn' data-btn='red' >Clear</button>
        </div>
      </form>

      <div id='form-alt'>
        <h4>Or Login Using</h4>
        <button data-btn='blue' >Google</button>
        <button data-btn='black' >Github</button>
      </div>

      <p id='form-para'>Not Registered ? <NavLink to='/register'>Register Here</NavLink> </p>

    </div>
  )
}

export default Login