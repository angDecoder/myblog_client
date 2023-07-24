import React, { useState,useRef } from 'react';
import './Post.css';
// import { randomUUID } from 'crypto';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import BlockQuote from '../CustomBlocks/BlockQuote';
import Highlight from '../CustomBlocks/Highlight';
import Code from '../CustomBlocks/Code';
import Link from '../CustomBlocks/Link';
import Upvote from '../../assets/Upvote';
import Bookmark from '../../assets/Bookmark';
import Share from '../../assets/Share';
import { addCommentApi, getPostByIdApi } from '../../api/post';
import { toast } from 'react-toastify';
import usePrivateAxios from '../../hooks/usePrivateAxios';

function Post() {

    const [draft, setDraft] = useState(null);
    const [comment, setComment] = useState(null);
    const commentRef = useRef();
    const { id } = useParams();
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
    const email = useSelector(state=>state.user.email);
    const ax = usePrivateAxios();
    console.log(draft);
    console.log(comment);

    const addComment = async()=>{
        console.log('ehre');
        const text = commentRef.current.value.trim();
        if( text==='' ){
            toast("comment can't be empty");
            return;
        }

        try {
            await addCommentApi({email,id,comment : text,ax});
            setComment([ 
                ...comment,
                {
                    id : Math.random(),
                    comment : text,
                    account_id : email
                } 
            ]);

            commentRef.current.value = '';
        } catch (error) {
            console.log(error);
        }
    }

    useState(() => {
        getPostByIdApi({ id })
            .then((res) => {
                setDraft(res.draft);
                setComment(res.comment);

            })
    }, []);

    if (draft === null)
        return <div>Post</div>

    return (
        <div id='Post'>
            <div id='post-meta'>
                {
                    draft.cover_image === '' ? <></> :
                        <img src={BACKEND_URL + draft.cover_image} id='post-coverimg' alt="" />
                }
                <div id='post-creator'>
                    <span>@{draft.created_by.split('@')[0]}</span>
                    <span>{format(new Date(draft.created_at), 'dd LLL yy')}</span>
                </div>
                <h1>{draft.title}</h1>
                <div id='post-tags'>
                    {
                        draft.tags.map(tag => {
                            return <span
                                key={`${tag}`}
                            >#{tag}
                            </span>
                        })
                    }
                </div>
            </div>


            <div id='post-content'>
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

            <div id='post-control'>
                <Upvote votes={draft.total_upvote} />
                <Bookmark />
                <Share />
            </div>
            <div id='post-comment'>
                <h3>Comments</h3>
                <div id='addcomment'>
                    <textarea ref={commentRef} placeholder='Add new comment ....' rows='3'></textarea>
                    <span onClick={addComment}>Send</span>
                </div>
                {
                    comment.map(comm => {
                        return <div className='comment' key={comm.id}>
                            <p>{comm.account_id.split('@')[0]} </p>
                            <p>
                                {comm.comment}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Post