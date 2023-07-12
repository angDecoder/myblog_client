import React from 'react';
import './Home.css';
import Logo from '../../assets/Logo'
import scene from '../../assets/user.png';
import Upvote from '../../assets/Upvote';
import Bookmark from '../../assets/Bookmark';
import Share from '../../assets/Share';


function Home() {
  return (
    <div id='Home'>
      <section id='home-intro'>
        <h1>Unraveling the Layers <br /> of Knowledge</h1>
        <p>Discover stories, thinking, and <br /> expertise from writers on any topic.</p>
        <button data-btn='black'>Get Started</button>
        {/* <img src={logo} alt="" /> */}
        <Logo />
      </section>

      <section id='home-postlist'>
        <h1>Top Posts</h1>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        <div className='post-card'>
          <div className='card-creator'>
              <img src={scene} alt="" />
              <p>Angshu</p>
              <h4>Read</h4>
          </div>
          <img src={scene} alt="" />
          <div className='card-content'>
            <h4>This the heading</h4>
            <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
          </div>
          <div className='card-bar'>
            <Upvote votes={10} />
            <Bookmark />
            <Share />
          </div>
        </div>
        
        
      </section>

    </div>
  )
}

export default Home