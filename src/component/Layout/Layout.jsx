import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
    <ToastContainer />
    <Navbar />
    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default Layout