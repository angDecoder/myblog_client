import React from 'react';
import './Home.css';
import Logo from '../../assets/Logo'
import scene from '../../assets/user.png';
import Upvote from '../../assets/Upvote';
import Bookmark from '../../assets/Bookmark';
import Share from '../../assets/Share';
import { useSelector, useDispatch } from 'react-redux';
import { bookmarkPost, upvotePost } from '../../features/postSlice';
import usePrivateAxios from '../../hooks/usePrivateAxios';
import { USER_STATUS } from '../../features/userSlice';
import { toast } from 'react-toastify';

function Home() {

  const postById = useSelector(state => state.post.postById);
  const userStatus = useSelector(state=>state.user.status);
  const ax = usePrivateAxios();
  const dispatch = useDispatch();
  console.log(postById);

  const upvoteThePost = (event,id) => {
    if( userStatus===USER_STATUS.loggedin )
      dispatch( upvotePost({ax,id}) );
    else
      toast("Login before upvoting");
  }

  const bookmarkThePost = (event,id) => {
    if( userStatus===USER_STATUS.loggedin )
      dispatch( bookmarkPost({ax,id}) );
    else
      toast("Login before upvoting");
  }


  return (
    <div id='Home'>
      <section id='home-intro'>
        <h1>Unraveling the Layers <br /> of Knowledge</h1>
        <p>Discover stories, thinking, and <br /> expertise from writers on any topic.</p>
        <button data-btn='black'>Get Started</button>
        {/* <img src={logo} alt="" /> */}
        <Logo />
      </section>

      <section className='post-list'>
        <h2>Top Posts</h2>

        {
          Object.keys(postById).map(key => {
            const post = postById[key];
            return (
              <div key={post.id} className='post-card'>
                <div className='card-creator'>
                  <p> {post.created_by.split('@')[0]} </p>
                  <span>Read</span>
                </div>
                <img src={scene} alt="" />
                <div className='card-content'>
                  <h4> {post.title} </h4>
                  <p>description : {post.description} </p>
                </div>
                <div className='card-bar'>
                  <span onClick={(event)=>upvoteThePost(event,post.id)}>
                    <Upvote myclass={post.upvoted_by_user?'checked' : ''} votes={post.total_upvote} />
                  </span>
                  <span onClick={(event)=>bookmarkThePost(event,post.id)}>
                    <Bookmark myclass={post.bookmarked_by_user?'checked' : ""} />
                  </span>
                  <span>
                    <Share />
                  </span>
                </div>
              </div>
            )
          })
        }



      </section>

    </div>
  )
}

export default Home