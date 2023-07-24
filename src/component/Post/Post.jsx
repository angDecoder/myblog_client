import React,{ useState } from 'react';
import './Post.css';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import BlockQuote from '../CustomBlocks/BlockQuote';
import Highlight from '../CustomBlocks/Highlight';
import Code from '../CustomBlocks/Code';
import Link from '../CustomBlocks/Link';
import { getPostByIdApi } from '../../api/post';

function Post() {

    const [loading, setLoading] = useState(true);
    const [draft, setDraft] = useState(null);
    const { id } = useParams();
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
    console.log(id);

    useState(()=>{
        getPostByIdApi({id})
        .then((res)=>{
            setDraft(res.draft);
        })
    },[]);

    if( draft===null )
        return <div>Post</div>

    return (
        <div id='Post'>

            <div id='post-meta'>
                {
                    draft.cover_image === '' ? <></> :
                        <img src={BACKEND_URL + draft.cover_image} id='post-coverimg' alt="" />
                }
                <h1>{draft.title}</h1>
                {
                    draft.tags.map(tag => {
                        return <span
                            key={`${tag}`}
                            className='post-tag'>#{tag}
                        </span>
                    })
                }
            </div>

            <Markdown options={{
                forceBlock: false,
                overrides: {
                    blockquote: {
                        component: BlockQuote,
                        props: {
                            className: 'blockquote'
                        }
                    },
                    Tip: {
                        component: Highlight,
                        props: {
                            type: 'tip'
                        }
                    },
                    Note: {
                        component: Highlight,
                        props: {
                            type: 'note'
                        }
                    },
                    Warning: {
                        component: Highlight,
                        props: {
                            type: 'warning'
                        }
                    },
                    code: {
                        component: Code
                    },
                    link: {
                        component: Link,
                    },
                }
            }}>
                {draft.content}
            </Markdown>

        </div>
    )
}

export default Post