import React from 'react'
import Footer from '../Footer'
import Cards from '../Cards'

function Feedit() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/AdobeStock.mov' autoPlay loop muted />
                <h2>Feed-it Project</h2>
                <p>Feed-it is a Reddit feed clone used to create posts and comment on those posts. Uses a Rails API and JS React-Redux frontend.</p>
                <h3><u>Skills Displayed</u></h3>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Thunk</li>
                    <li>JavaScript</li>
                    <li>JSON</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>RESTful API</li>
                    <li>SQL</li>
                    <li>Database</li>
                </ul>
                <form action='https://github.com/BRoel/feed-it_frontend' target="_blank">
                    <button type="submit" value="Go to GitHub" class="glow-on-hover" >Feed-it's GitHub</button>
                </form>
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