import React, { useState } from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { USER_STATUS, autoLogin } from '../../features/userSlice';
import { ToastContainer } from 'react-toastify';

function Layout() {

  const status = useSelector(state => state.user.status);
  const dispatch = useDispatch();
  const [tried, setTried] = useState(false);
  const {
    refresh_token,
    token_type
  } = JSON.parse(localStorage.getItem('myblog-token'));

  if (!tried && status === USER_STATUS.loggedout) {
    setTried(true);
    dispatch(autoLogin({ refresh_token, token_type }));
  }

  return (
    <>
      <ToastContainer />
      {
        tried || status === USER_STATUS.loggedin ?
          <>
            <Navbar />
            <Outlet />
          </>
          :
          <div> loading ...</div>
      }


    </>
  )
}

export default Layout