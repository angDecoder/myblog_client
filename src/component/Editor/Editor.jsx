import React, { useEffect, useState, useRef } from 'react';
import './Editor.css';
import Blockquote from '../../assets/Blockquote';
import Bold from '../../assets/Bold';
import Italic from '../../assets/Italic';
import Underline from '../../assets/Underline';
import Divider from '../../assets/Divider';
import Code from '../../assets/Code';
import Photo from '../../assets/Photo';
import Link from '../../assets/Link';
import controls from './controls';
import Note from '../../assets/Write';
import Tip from '../../assets/Logo';
import Warning from '../../assets/Danger';
// import verticalDot from '../../assets/vertical-dot.svg';
import VerticalDot from '../../assets/VerticalDot';


function Editor() {

  const [tagList, setTagList] = useState([]);

  const autoGrowTextarea = (event) => {
    const prevHeight = event.target.scrollHeight;
    const editor = document.querySelector('#editor');
    const prevPos = editor.scrollTop;

    event.target.style.height = '5px';
    const scrollHeight = event.target.scrollHeight;
    event.target.style.height = (scrollHeight) + 'px';

    if (prevHeight === scrollHeight)
      editor.scrollTop = prevPos;

  }

  const addTags = (event) => {
    if (event.key === 'Enter') {
      let text = event.target.value.trim().toLowerCase();
      if (text !== '' && !tagList.includes(text) && tagList.length < 4)
        setTagList([...tagList, text]);
      else
        event.target.placeholder = 'No more tags';

      event.target.value = '';
    }
  }

  const removeTag = (tag) => {
    const newTagList = tagList.filter(elem => elem !== tag);
    setTagList(newTagList);
    const input = document.querySelector('#editor_title > input');
    input.placeholder = 'Add upto 4 tags ...';
  }
  const editorControlRef = useRef(null);
  // const [isOpen, openHandler] = useClickOutside(editorControlRef);
  const [isOpen, setIsOpen] = useState(false);

  // adding event listener
  useEffect(() => {

    const selector = `#editor_title > textarea,
                #editor_content > textarea`;
    const textarea = document.querySelectorAll(selector);
    textarea.forEach(elem => {
      elem.addEventListener('input', autoGrowTextarea);
    });

    const input = document.querySelector('#editor_title > input');
    input.addEventListener('keyup', addTags);

    return () => {
      textarea.forEach(elem => {
        elem.removeEventListener('input', autoGrowTextarea);
      })
      input.removeEventListener('keyup', addTags);
    }
  });

  useEffect(() => {
    const initialValue = localStorage.getItem('md');
    document.querySelector('#editor_content > textarea').value = initialValue;
    controls.autoGrow();
  }, []);

  return (
    <div id='editor'>
      <div id='editor_title'>
        <button >Add a Cover Image</button>
        <textarea
          placeholder='New Post Title Here...'
          id="" rows="1"></textarea>
        <input type="text" placeholder='Add upto 4 tags ...' />
        <div>
          {
            tagList.map(tag => {
              return <span
                key={`${tag}`}
                onClick={() => removeTag(tag)} className='post-tag'>#{tag}&nbsp;&nbsp;
                <span>&#x2718;</span>
              </span>
            })
          }
        </div>
      </div>
      <div id='editor_control'>
        <span style={{ "--desc": "'Bold'" }} onClick={controls.bold}>
          <Bold />
        </span>
        <span style={{ "--desc": "'Italic'" }} onClick={controls.italic}>
          <Italic />
        </span>
        <span style={{ "--desc": "'Underline'" }} onClick={controls.underline}>
          <Underline />
        </span>
        <span style={{ "--desc": "'Link'" }} onClick={controls.link}>
          <Link />
        </span>
        <span style={{ "--desc": "'Divider'" }} onClick={controls.divider}>
          <Divider />
        </span>
        <span style={{ "--desc": "'Code'" }} onClick={controls.code}>
          <Code />
        </span>
        {/* <input type="file" id="editor_img" style={{ display : 'none' }} onChange={controls.photo}   />
        <span>
          <label htmlFor="editor_img">
              <Photo />
          </label>
        </span> */}


        <span id='extra-control' ref={editorControlRef} onClick={()=>setIsOpen(!isOpen)}>
          <VerticalDot />
          {
            !isOpen ? <></> :
              <div >
                <span onClick={controls.blockquote}>
                  <Blockquote />
                  <p>Blockquote</p>
                </span>
                <span onClick={controls.tip}>
                  <Tip />
                  <p>Tip</p>
                </span>
                <span onClick={controls.warning}>
                  <Warning />
                  <p>Warning</p>
                </span>
                <span onClick={controls.note}>
                  <Note />
                  <p>Note</p>
                </span>
              </div>
          }
        </span>

      </div>
      <div id='editor_content'>
        <textarea
          // value={()=>localStorage.getItem('md')}
          onChange={(event) => localStorage.setItem('md', event.target.value)}
          placeholder='Your content Here'></textarea>
      </div>
    </div>
  )
}

export default Editor