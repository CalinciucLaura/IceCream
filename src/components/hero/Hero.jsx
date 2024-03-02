import React from "react"
import "./hero.scss"

const Index = (props) => {
    return (
        <div className="hero">
            <img className="hero-image1" src="images/image1.png" />
            <div className="textContainer">
                <h2 style={{ alignSelf: "flex-start", transform: 'translate(270px)' }}>It's</h2>
                <h1>Ice Cream</h1>
                <h2 style={{ translate: "-200px" }}>o'clock !</h2>
                <button>Read more</button>
            </div>
            <img className="raspberry" src="images/raspberry.png" />
            <img className="hero-image2" src="images/image3.png" />

        </div>
    )
};

export default Index;
