import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/AdobeStock.mov' autoPlay loop muted />
      <h1>Brennan Roel's Portfolio</h1>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Hire Me
        </Button>
      </div>
    </div>
  );
}

export default MainSection;