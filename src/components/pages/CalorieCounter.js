import React from 'react'
import Footer from '../Footer'
import Cards from '../Cards'
import './Pages.css'

function CalorieCounter() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/AdobeStock.mov' autoPlay loop muted />
                <h1>Calorie Counter Project</h1>
                <p>Calorie Counter is a CRUD app for keeping track of your daily caloric intake, along with type of foods.  Calorie Counter was created using Rails and the Sinatra framework</p>
                <h3><u>Skills Displayed</u></h3>
                <ul>
                    <li>Ruby</li>
                    <li>Sinatra</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MVC</li>
                    <li>Authentication</li>
                    <li>Authorization</li>
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
                <iframe src='/videos/CounterVid.mp4' type='video/mp4' width="100%" height='800' title='CalorieCount Video' autoPlay='autoPlay'/>
            </div>
            <Cards/>
            <Footer/>
        </>
    );
}

export default CalorieCounter