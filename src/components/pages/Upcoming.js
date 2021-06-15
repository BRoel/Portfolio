import React from 'react'
import '../../App.css'
import Button from '../Button';
import Footer from '../Footer'

function Upcoming() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/UpcomingAppVid.mov' autoPlay loop muted />
                <h1>Upcoming project</h1>
                <div className='main-btns'>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    Hire Me
                    </Button>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Upcoming