import React from 'react'
import '../../App.css'
import Button from '../Button';
import Footer from '../Footer'

function CalorieCounter() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/CalorieCountVid.mp4' autoPlay loop muted />
                <h1>Calorie Counter Project</h1>
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
            <Footer/>
        </>
    );
}

export default CalorieCounter