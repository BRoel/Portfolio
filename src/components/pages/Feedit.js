import React from 'react'
import '../../App.css'
import Footer from '../Footer'

function Feedit() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/FeeditVid.mov' autoPlay loop muted />
                <h1>Feed-it Project</h1>
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

export default Feedit