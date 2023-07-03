import React from 'react';
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

  const showNav = ()=>{
    const nav = document.querySelector('nav');
    nav.classList.add('show-nav');
  }

  const hideNav = ()=>{
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
          <span><img src={home} alt="" className='svg-img' />Home</span>
          <span><img src={profile} alt="" className="svg-img" />Profile</span>
          <span><img src={login} alt="" className="svg-img" />Login</span>
          <span><img src={register} alt="" className="svg-img" />Register</span>
          <span><img src={write} alt="" className="svg-img" />Create Blog</span>
      </nav>
    </header>
  )
}

export default Navbar