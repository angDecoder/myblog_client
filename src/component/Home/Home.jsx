import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id='Home'>
      <h1>Lorem ipsum dolor sit amet. In Return Is Shocking</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>heading 4</h4>
      <p>paragraph - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, consequatur nihil optio est a vel quia repellendus illo quod cum?</p>
      
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
        <li>list 5</li>
      </ul>
      <h1>INSIGHTS</h1>
      <button data-btn='green'>Click Me</button>
      <button data-btn='red'>Click Me</button>
    </div>
  )
}

export default Home