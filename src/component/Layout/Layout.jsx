import React, { useRef } from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { USER_STATUS, autoLogin } from '../../features/userSlice';
import { ToastContainer } from 'react-toastify';

function Layout() {

  const status = useSelector(state => state.user.status);
  const dispatch = useDispatch();
  const tried = useRef(false);

  const myblog_token = JSON.parse(localStorage.getItem('myblog-token'));

  if (!tried.current && status === USER_STATUS.loggedout) {
    if (myblog_token)
      dispatch(autoLogin(myblog_token));

    tried.current = true;
  }

  return (
    <>
    <ToastContainer />
      {
        !tried.current || status === USER_STATUS.loading ?
          <div>Loading ...</div> :
          <>
            <Navbar />
            <Outlet />
          </>
      }

    </>
  )
}

export default Layout