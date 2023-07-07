import React, { useEffect, useState } from 'react';
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

  useEffect(()=>{
    const initialValue = localStorage.getItem('md');
    document.querySelector('#editor_content > textarea').value = initialValue;
    controls.autoGrow();
  },[]);

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
        <span onClick={controls.bold}>
          <Bold />
        </span>
        <span onClick={controls.italic}>
          <Italic />
        </span>
        <span onClick={controls.underline}>
          <Underline />
        </span>
        <span>
          <Link />
        </span>
        <span onClick={controls.divider}>
          <Divider />
        </span>
        <span>
          <Code />
        </span>
        <span>
          <Photo />
        </span>
        <span onClick={controls.blockquote}>
          <Blockquote  />
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