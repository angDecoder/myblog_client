import React from 'react';
import scene from '../../assets/user.png';

function Dashdrafts() {
    return (
        <div className='post-list'>
            <h2>All Drafts</h2>
            <div className='post-card'>
                <div className='card-creator'>
                    <span>Edit</span>
                    <span>Preview</span>
                    <span>Publish</span>
                </div>
                <img src={scene} alt="" />
                <div className='card-content'>
                    <h4>This the heading</h4>
                    <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quae aut fugiat nemo repudiandae.</p>
                </div>
            </div>
        </div>
    )
}

export default Dashdrafts