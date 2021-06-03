import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Cards</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/"
                            text="Take a look at my projects"
                            label="projects"
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards