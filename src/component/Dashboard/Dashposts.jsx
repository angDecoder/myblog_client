import React,{ useEffect } from 'react';
import scene from '../../assets/user.png';
import usePrivateAxios from '../../hooks/usePrivateAxios';
import { useDispatch } from 'react-redux';
import { getAllDrafts } from '../../features/draftSlice';


function Dashposts() {

    

    return (
        <>
            <div id='post-stats'>
                <h3>Post statistics</h3>
                <div>
                    <h4>10</h4>
                    <p>Total Posts</p>
                </div>

                <div>
                    <h4>10</h4>
                    <p>Total Post Comments</p>
                </div>

                <div>
                    <h4>10</h4>
                    <p>Total Post Likes</p>
                </div>

                <div>
                    <h4>10</h4>
                    <p>Total Times Bookmarked</p>
                </div>

            </div>

            <div className='post-list'>
                <h2>All Posts </h2>
                <div className='post-card'>
                    <div className='card-creator'>
                        <span>Edit</span>
                        <span>Read</span>
                    </div>
                    <img src={scene} alt="" />
                    <div className='card-content'>
                        <h4>This the heading</h4>
                        <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashposts