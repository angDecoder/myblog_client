import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { USER_STATUS } from '../../features/userSlice';
import './Navbar.css';
import Logo from '../../assets/Logo';
import ham from '../../assets/hamburger.svg';
import cross from '../../assets/cross.svg';
import Write from '../../assets/Write';
import login from '../../assets/login.svg';
import register from '../../assets/register.svg';
import home from '../../assets/home.svg';
import profile from '../../assets/profile.svg';
import { logoutUser } from '../../features/userSlice'

function Navbar() {
  let {
    status,
    userimg,
    token_type
  } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
  if (token_type === 'JWT' && userimg)
    userimg = BACKEND_URL + userimg;

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
      <Logo />
      <span id='nav-logo'>INSIGHT</span>
      {
        status === USER_STATUS.loggedin && userimg ?
          <img src={userimg} alt="userimg" id='nav-userimg' /> :
          <></>
      }
      <img src={ham} id='nav-ham' alt="" onClick={showNav} />
      <nav>
        <img src={cross} alt="" className='svg-img' id='nav-close' onClick={hideNav} />
        <NavLink to={''} className='navlink'>
          <img src={home} alt="" className='svg-img' />
          Home
        </NavLink>

        {
          status === USER_STATUS.loggedin ?
            <>
              <span onClick={()=>dispatch(logoutUser())} className='navlink'>
                <img src={register} alt="" className="svg-img" />
                Logout
              </span>

              <NavLink to='dashboard' className='navlink'>
                <img src={profile} alt="" className="svg-img" />
                Dashboard
              </NavLink>

              <NavLink to='edit/noid' className='navlink'>
                <Write />
                Create Post
              </NavLink>

            </>
            :
            <>
              <NavLink to='login' className='navlink'>
                <img src={login} alt="" className="svg-img" />
                Login
              </NavLink>

              <NavLink to='register' className='navlink'>
                <img src={register} alt="" className="svg-img" />
                Register
              </NavLink>
            </>
        }
      </nav>
    </header>
  )
}

export default Navbar