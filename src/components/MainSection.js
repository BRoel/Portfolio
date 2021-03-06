import React from 'react';
import './Button.css';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/TechVid.mov' autoPlay loop muted>This content is not supported</video>
      <h1>Brennan Roel's Portfolio</h1>
      <div className='main-btns'>
        <form action='https://www.linkedin.com/in/brennan-roel/' target="_blank">
          <button type="submit" value="Go to GitHub" class="glow-on-hover" >Hire Me</button>
        </form>
      </div>
    </div>
  );
}

export default MainSection;