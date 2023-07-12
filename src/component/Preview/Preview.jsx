import React from 'react';
import './Preview.css';
import Markdown from 'markdown-to-jsx';
import BlockQuote from '../CustomBlocks/BlockQuote';
import Highlight from '../CustomBlocks/Highlight';
import Code from '../CustomBlocks/Code';
import Link from '../CustomBlocks/Link';

function Preview() {
  return (
    <div id='Preview'>
        <Markdown options={{
          forceBlock : true,
          overrides : {
            blockquote : {
              component : BlockQuote,
              props : {
                className : 'blockquote'
              }
            },
            Tip : {
              component : Highlight,
              props : {
                type : 'tip'
              }
            },
            Note : {
              component : Highlight,
              props : {
                type : 'note'
              }
            },
            Warning : {
              component : Highlight,
              props : {
                type : 'warning'
              }
            },
            code : {
              component : Code
            },
            link : {
              component : Link,
            },
            
          }
        }}>
          { localStorage.getItem('md').replace('\n','  \n') }
        </Markdown>
    </div>
  )
}

export default Preview