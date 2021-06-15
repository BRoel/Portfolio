import React from 'react'
import '../../App.css'
import Footer from '../Footer'

function CalorieCounter() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/CalorieCountVid.mp4' autoPlay loop muted />
                <h1>Calorie Counter Project</h1>
                <div className='main-btns'>
                    <form action='https://www.linkedin.com/in/brennan-roel/' target="_blank">
                        <button type="submit" value="Go to GitHub" class="glow-on-hover" >Hire Me</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CalorieCounter