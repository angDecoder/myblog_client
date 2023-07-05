import React from 'react';
import './Auth.css';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <div id='Auth'>
      <h1>Register User</h1>

      <form>
        <input type="text" placeholder='Email' className="form-input" />
        <input type="text" placeholder='Username' className="form-input" />
        <input type="password" placeholder='Password' className="form-input" />
        <input type="password" placeholder='Confirm Password' className="form-input" />
        <div>
          <button className='form-btn' data-btn='green'>Submit</button>
          <button className='form-btn' data-btn='red' >Clear</button>
        </div>
      </form>

      <div id='form-alt'>
        <h4>Or Register Using</h4>
        <button data-btn='blue' >Google</button>
        <button data-btn='black' >Github</button>
      </div>

      <p id='form-para'>Already Regisered? <NavLink to='/login'>Login Here</NavLink> </p>
    </div>
  )
}

export default Register