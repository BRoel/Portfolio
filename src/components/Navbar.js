import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        BR
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' class='dropdown'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu} >
                                Projects
                            </Link>
                            <div class="dropdown-content">
                            <Link to='/feedit' >Feed-it</Link>
                            <Link to='/upcoming' >Upcoming</Link>
                            <Link to='/caloriecounter' >Calorie Counter</Link>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-links'
                                href='https://www.linkedin.com/in/brennan-roel/'
                                target='_blank'
                                rel="noreferrer"
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar