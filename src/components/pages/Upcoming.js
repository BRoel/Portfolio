import React from 'react'
import Footer from '../Footer'
import Cards from '../Cards'

function Upcoming() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/AdobeStock.mov' autoPlay loop muted />
                <h1>Upcoming Project</h1>
                <p>Upcoming is an application used to add and remove your desired upcoming games to track. Uses a Rails API and JS frontend.</p>
                <h3><u>Skills Displayed</u></h3>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>Ruby</li>
                    <li>JSON</li>
                    <li>Ruby on Rails</li>
                    <li>SQL</li>
                    <li>Database</li>
                </ul>
                <div className='main-btns'>
                    <form action='https://www.linkedin.com/in/brennan-roel/' target="_blank">
                        <button type="submit" value="Go to LinkedIn" class="glow-on-hover" >Hire Me</button>
                    </form>
                </div>
            </div>
            <div className='pages-container'>
                <iframe src='/videos/UpcomingVid.mp4' type='video/mp4' width="100%" height='800' title='CalorieCount Video' autoPlay='autoPlay'/>
            </div>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Upcoming