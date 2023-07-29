import React, { useState, useRef } from 'react';
import './Post.css';
import { useSelector,useDispatch } from 'react-redux';
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
import { addCommentApi } from '../../api/post';
import { toast } from 'react-toastify';
import usePrivateAxios from '../../hooks/usePrivateAxios';
import { getPostById, getPostComment } from '../../features/postSlice';

function Post() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const post = useSelector(state=>{
        return state.post.postById[id];
    });

    const comments = post?.comments ? post.comments : [];

    const commentRef = useRef();
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
    const {email,status} = useSelector(state => state.user);
    const ax = usePrivateAxios();

    useState(() => {
        if( !post )
            dispatch( getPostById({id,email}) );
        else if( !post?.comment )
            dispatch( getPostComment({ id }) );
    }, []);

    const addComment = async () => {
        const text = commentRef.current.value.trim();
        if (text === '') {
            toast("comment can't be empty");
            return;
        }

        try {
            await addCommentApi({ email, id, comment: text, ax });
            setComment([
                ...comment,
                {
                    id: Math.random(),
                    comment: text,
                    account_id: email
                }
            ]);

            commentRef.current.value = '';
        } catch (error) {
            console.log(error);
        }
    }

    if (!post)
        return <div>Post</div>

    return (
        <div id='Post'>
            <div id='post-meta'>
                {
                    post.cover_image === '' ? <></> :
                        <img src={BACKEND_URL + post.cover_image} id='post-coverimg' alt="" />
                }
                <div id='post-creator'>
                    <span>@{post.created_by.split('@')[0]}</span>
                    <span>{format(new Date(post.created_at), 'dd LLL yy')}</span>
                </div>
                <h1>{post.title}</h1>
                <div id='post-tags'>
                    {
                        post.tags.map(tag => {
                            return <span
                                key={`${tag}`}
                            >#{tag}
                            </span>
                        })
                    }
                </div>
                <p id='post-description'>{post.description}</p>
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
                    {post.content}
                </Markdown>
            </div>

            <div id='post-control'>
                <Upvote votes={post.total_upvote} />
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
                    comments.map(comm => {
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