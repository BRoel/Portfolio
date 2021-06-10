import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Projects</h2>
                        <Link to='/projects'>Feed-it</Link>
                        <Link to='/projects'>Upcoming</Link>
                        <Link to='/projects'>Calorie Counter</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Me</h2>
                        <div class='social-icons'>
                            <a
                                class='social-icon-link LinkedIn'
                                href='https://www.linkedin.com/in/brennan-roel/'
                                target='_blank'
                                rel="noreferrer"
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <small class='website-rights'>BR © 2021</small>
        </div>
    )
}

export default Footer;