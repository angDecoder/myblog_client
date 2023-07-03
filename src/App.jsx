import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import TextEditor from './component/TextEditor/TextEditor';

function App() {
  return (
    <Routes>
      <Route path='' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='edit' element={<TextEditor />} />
      </Route>
    </Routes>
  )
}

export default App