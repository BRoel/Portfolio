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
                <form action='https://github.com/BRoel/upcoming_frontend' target="_blank">
                    <button type="submit" value="Go to GitHub" class="glow-on-hover" >Upcoming's GitHub</button>
                </form>
            </div>
            <div id='video'>
                <iframe src='/videos/UpcomingVid.mp4' type='video/mp4' title='CalorieCount Video' autoPlay='autoPlay'/>
            </div>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Upcoming