import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import './Auth.css';
import { NavLink } from 'react-router-dom';
import Adduser from '../../assets/adduser.svg';
import { registerUserJwtApi } from '../../api/auth';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { registerUserJwt } from '../../api/auth';


function Register() {
  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
  // console.log(import.meta.env);

  const [avatar, setAvatar] = useState(Adduser);
  const navigate = useNavigate();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  // console.log(import.meta.env);

  const selectImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64Data = event.target.result;
        setAvatar(base64Data);
      };

      reader.readAsDataURL(file);
    }
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const test = emailTest() && usernameTest() && passwordTest() && cnfPasswordTest();

    if (!test) {
      alert('all the inputs must be error free');
      return;
    }

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const username = usernameRef.current.value.trim();
    await registerUserJwtApi({ email, password, username,avatar, navigate });

  }

  const onClearHandler = (event) => {
    event.preventDefault();
    setAvatar(Adduser);
    const selector = document.querySelectorAll('.form-input');

    selector.forEach(elem => {
      elem.firstChild.value = "";
      elem.classList.remove('error')
      elem.classList.remove('success');
      elem.style.setProperty('--aftercontent', '');
    })
  };

  const keyUpHandler = (event, test, invalidText) => {
    const parentInput = event.target.parentNode;
    if (test) {
      parentInput.style.setProperty('--aftercontent', "''");
      parentInput.classList.add('success');
      parentInput.classList.remove('error');
    }
    else if (!parentInput.classList.contains('error')) {
      parentInput.style.setProperty('--aftercontent', `'${invalidText}'`);
      parentInput.classList.add('error');
      parentInput.classList.remove('success');
    }
  }

  const emailTest = () => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const test = emailRegex.test(emailRef.current.value.trim());
    return test;
  }

  const passwordTest = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const test = passwordRegex.test(passwordRef.current.value.trim());
    return test;
  }

  const cnfPasswordTest = () => {
    const pass = passwordRef.current.value.trim();
    const cnfPass = confirmPassRef.current.value.trim();

    return pass !== '' && pass === cnfPass;
  }

  const usernameTest = () => {
    const username = usernameRef.current.value.trim();
    // console.log(username.length)
    return username.length > 0;
  }

  return (
    <div id='Auth'>
      <h1>Register User</h1>

      <form>
        <span className='form-input '>
          <input ref={emailRef}
            onKeyUp={(event) => keyUpHandler(event, emailTest(), "* invalid email format")}
            type="text" placeholder='Email' />
        </span>

        <span className="form-input ">
          <input
            onKeyUp={(e) => keyUpHandler(e, usernameTest(), '* username can not be empty')}
            ref={usernameRef} type="text" placeholder='Username' />
        </span>

        <span className="form-input">
          <input
            onKeyUp={(e) => keyUpHandler(e, passwordTest(), '* min 8 char, at least one letter, one number and one special char')}
            ref={passwordRef} type="password" placeholder='Password' />

        </span>
        <span className="form-input">
          <input
            onKeyUp={(e) => keyUpHandler(e, cnfPasswordTest(), '* password did not match')}
            ref={confirmPassRef} type="password" placeholder='Confirm Password' />

        </span>

        <input type="file" accept="image/*"
          onChange={selectImage}
          style={{ display: 'none' }} id='form-file' placeholder='my' />
        <label htmlFor="form-file" id='select_img'>
          <img src={avatar} alt="" />
          <span style={{ fontSize: 'var(--p)' }}>Profile Pic</span>
        </label>

        <div>
          <button className='form-btn' data-btn='green' onClick={onSubmitHandler}>Submit</button>
          <button className='form-btn' data-btn='red' onClick={onClearHandler}>Clear</button>
        </div>
      </form>

      <div id='form-alt'>
        <h4>Or Register Using</h4>
        <button data-btn='black' >Github</button>
      </div>
      <p id='form-para'>Already Regisered? <NavLink to='/login'>Login Here</NavLink> </p>

    </div>
  )
}

export default Register