import React from 'react'
import Footer from '../Footer'
import Cards from '../Cards'

function Feedit() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/AdobeStock.mov' autoPlay loop muted />
                <h1>Feed-it Project</h1>
                <p>Feed-it is a Reddit feed clone used to create posts and comment on those posts. Uses a Rails API and JS React-Redux frontend.</p>
                <div className='main-btns'>
                    <form action='https://www.linkedin.com/in/brennan-roel/' target="_blank">
                        <button type="submit" value="Go to LinkedIn" class="glow-on-hover" >Hire Me</button>
                    </form>
                </div>
            </div>
            <div className='pages-container'>
                <iframe src='/videos/FeeditVid.mp4' type='video/mp4' width="100%" height='800' title='CalorieCount Video' autoPlay='autoPlay'/>
            </div>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Feedit