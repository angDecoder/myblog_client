import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TextEditor.css';
import { NavLink, Outlet,useBeforeUnload } from 'react-router-dom';



function TextEditor() {

  const [toLink, setToLink] = useState('preview');
  const { id } = useParams();
  const toggleNavlink = ()=>{
    if( toLink==='' )
      setToLink('preview');
    else  
      setToLink('');
  }


  const saveDraft = ()=>{
    if( id==='noid' ){

    }
    else{

    }
  }

  return (
    <div id='TextEditor'>
        <div id='edit_toggle'>
          <button onClick={saveDraft}>Save Draft</button>
          {
            id!=='noid' ? 
              <button data-btn='blue'>Publish</button>:
              <></>  
          }

          <NavLink onClick={toggleNavlink} className='navlink' to={toLink}>{
            toLink === '' ? 'Edit Here' : 'Preview'
          }</NavLink>
        </div>

       <Outlet />

    </div>
  )
}

export default TextEditor