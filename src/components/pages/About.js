import React from 'react'
import Footer from '../Footer'
import Cards from '../Cards'
import './About.css'

function About() {
    return (
        <>
            <div className='about-container'>
                <h1>About Me</h1>
                <p>Full-stack software developer with a passion for technical problem-solving.  Committed to writing clean code, debugging, and working to improve my knowledge at all times.  A strong team player and troubleshooter, I have a track record of 4 years leading successful sales campaigns in Healthcare services.  As a lifelong technophile, I have moved over into the coding space to find my true life’s purpose, bringing excitement and dedication to my work.
                </p>
                <h3><u>Skills</u></h3>
                <ul>
                    <li>JavaScript (ES6)</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Sinatra</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JSON</li>
                    <li>RESTful APIs</li>
                    <li>SQL</li>
                    <li>Postgres</li>
                    <li>OAuth</li>
                </ul>
                <div className='main-btns'>
                    <form action='https://www.linkedin.com/in/brennan-roel/' target="_blank">
                        <button type="submit" value="Go to LinkedIn" class="glow-on-hover" >Hire Me</button>
                    </form>
                </div>
            </div>
            <Cards/>
            <Footer/>
        </>
    );
}

export default About