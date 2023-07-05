import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import TextEditor from './component/TextEditor/TextEditor';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='edit' element={<TextEditor />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App