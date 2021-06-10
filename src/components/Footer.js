import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Projects</h2>
                        <a
                            href='https://github.com/BRoel/feed-it_frontend'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='LinkedIn'
                        >
                            Feed-it
                        </a>
                        <a
                            href='https://github.com/BRoel/upcoming_frontend'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='LinkedIn'
                        >
                            Upcoming
                        </a>
                        <a
                            href='https://github.com/BRoel/Counter'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='LinkedIn'
                        >
                            Calorie Counter
                        </a>
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