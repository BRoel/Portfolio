import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import '../MainSection.css';


function Projects() {
    return (
        <>
            <div className='main-container'>
                <video src='/videos/AdobeStock.mov' autoPlay loop muted />
                <h1>Projects</h1>
                <a href='https://github.com/BRoel/Counter' target="_blank" rel="noopener noreferrer"><button>Click</button></a>
            
            </div>
            <Footer />
        </>
    )
}

export default Projects;