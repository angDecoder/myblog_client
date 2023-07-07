import React from 'react';
import Tip from '../../assets/logo.svg';
import Note from '../../assets/write.svg';
import Warning from '../../assets/danger.svg';
import './Highlight.css'

function Highlight(props) {
    const { type,children } = props;
    console.log(children);

    let imgSrc = Note;
    if( type==='warning' )
        imgSrc = Warning;
    else if( type==='tip' )
        imgSrc = Tip;

  return (
    <div className={`highlight ${type}`}>
        <p>
            <img src={imgSrc} alt="" />
            {type.toUpperCase()}
        </p>
        <p>
            {children}
        </p>
    </div>
  )
}

export default Highlight