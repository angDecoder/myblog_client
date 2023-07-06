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


function Editor() {

  const [tagList, setTagList] = useState([]);

  const autoGrowTextarea = (event) => {
    event.target.style.height = '5px';
    const scrollHeight = event.target.scrollHeight;
    event.target.style.height = (scrollHeight) + 'px';
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

  const removeTag = (tag)=>{
    const newTagList = tagList.filter(elem=>elem!==tag);  
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
      input.removeEventListener('keyup',addTags);
    }
  });

  return (
    <div id='editor'>
      <div id='editor_title'>
        <button>Add a Cover Image</button>
        <textarea
          placeholder='New Post Title Here...'
          id="" rows="1"></textarea>
        <input type="text" placeholder='Add upto 4 tags ...' />
        <div>
          {
            tagList.map(tag => {
              return <span onClick={()=>removeTag(tag)} className='post-tag'># {tag}&nbsp;&nbsp;
                <span>&#x2718;</span>
              </span>
            })
          }
        </div>
      </div>
      <div id='editor_control'>
        <Bold />
        <Italic />
        <Underline />
        <Link />
        <Divider />
        <Code />
        <Photo />
        <Blockquote />
      </div>
      <div id='editor_content'>
        <textarea placeholder='Your content Here'></textarea>
      </div>
    </div>
  )
}

export default Editor