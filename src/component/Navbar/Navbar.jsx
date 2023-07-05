import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import ham from '../../assets/hamburger.svg';
import cross from '../../assets/cross.svg';
import write from '../../assets/write.svg';
import login from '../../assets/login.svg';
import register from '../../assets/register.svg';
import home from '../../assets/home.svg';
import profile from '../../assets/profile.svg';

function Navbar() {

  const showNav = () => {
    const nav = document.querySelector('nav');
    nav.classList.add('show-nav');
  }

  const hideNav = () => {
    const nav = document.querySelector('nav');
    nav.classList.remove('show-nav');
  }

  return (
    <header>
      <img src={logo} alt="logo-img" />
      <span id='nav-logo'>INSIGHT</span>
      <img src={ham} id='nav-ham' alt="" onClick={showNav} />
      <nav>
        <img src={cross} alt="" className='svg-img' id='nav-close' onClick={hideNav} />
        <NavLink to={''} className='navlink'>
          <img src={home} alt="" className='svg-img' />
          Home
        </NavLink>

        <NavLink to='profile' className='navlink'>
          <img src={profile} alt="" className="svg-img" />
          Profile
        </NavLink>

        <NavLink to='login' className='navlink'>
          <img src={login} alt="" className="svg-img" />
          Login
        </NavLink>

        <NavLink to='register' className='navlink'>
          <img src={register} alt="" className="svg-img" />
          Register
        </NavLink>

        <NavLink to='edit' className='navlink'>
          <img src={write} alt="" className="svg-img" />
          Create Blog
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar