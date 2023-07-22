import React from 'react';
import scene from '../../assets/user.png';
import Upvote from '../../assets/Upvote';
// import Bookmark from '../../assets/Bookmark';
import Share from '../../assets/Share';

function Dashbookmark() {
    return (
        <div className='post-list'>
            <h2>Bookmarks</h2>
            <div className='post-card'>
                <div className='card-creator'>
                    <img src={scene} alt="" />
                    <p>Angshu</p>
                    <span>Remove</span>
                    <span>Read</span>
                </div>
                <img src={scene} alt="" />
                <div className='card-content'>
                    <h4>This the heading</h4>
                    <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
                </div>
                <div className='card-bar'>
                    <Upvote votes={10} />
                    {/* <Bookmark /> */}
                    <Share />
                </div>
            </div>
        </div>
    )
}

export default Dashbookmark