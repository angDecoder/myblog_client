import React,{ useState } from 'react';
import './TextEditor.css';
import { NavLink, Outlet } from 'react-router-dom';



function TextEditor() {

  const [toLink, setToLink] = useState('preview');
  const toggleNavlink = ()=>{
    if( toLink==='' )
      setToLink('preview');
    else  
      setToLink('');
  }

  return (
    <div id='TextEditor'>
        <div id='edit_toggle'>
          <button>Save Draft</button>
          <button data-btn='blue'>Publish</button>
          <NavLink onClick={toggleNavlink} className='navlink' to={toLink}>{
            toLink === '' ? 'Edit Here' : 'Preview'
          }</NavLink>
        </div>

       <Outlet />

    </div>
  )
}

export default TextEditor