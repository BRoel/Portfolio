import React from 'react'
import '../../App.css'
import CardItem from '../CardItem';
import Footer from '../Footer'
import '../Cards.css'

function Projects() {
    return (
        <>
         <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <div className='cards__container'>
                            <CardItem
                                src='data:image/jpeg;base64,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'
                                text="Reddit Feed Clone Application"
                                label="Feed-it"
                                path='/projects'
                            />
                            <form action='https://github.com/BRoel/feed-it_frontend' target="_blank">
                                <button type="submit" value="Go to GitHub" class="btn btn-dark" >Feed-it's GitHub</button>
                            </form>
                        </div>
                        <div className='cards__container'>
                            <CardItem
                                src='images/Videogame.jpeg'
                                text="Upcoming Games Application"
                                label="Upcoming"
                                path='/projects'
                            />
                            <form action='https://github.com/BRoel/upcoming_frontend' target="_blank">
                                <button type="submit" value="Go to GitHub" class="btn btn-dark" >Upcoming's GitHub</button>
                            </form>
                        </div>
                        <div className='cards__container'>
                            <CardItem
                                src='images/Food.jpeg'
                                text="Calorie Counter Application"
                                label="Calorie Counter"
                                path='/projects'
                            />
                            <form action='https://github.com/BRoel/Counter' target="_blank">
                                <button type="submit" value="Go to GitHub" class="btn btn-dark" >Calorie Counter's GitHub</button>
                            </form>
                        </div>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects;