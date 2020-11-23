import React from 'react'
import Img1 from '../../Images/img-02.jpg';
import Img2 from '../../Images/headshot.png';
import './About.css';

function About() {
    return (
        <>
             <div>
            <div className='about-hero-container'>
            <img src={Img1} alt="background" className="about-background" />
            <div className="about-container">
            <h1>About Me</h1>
            <div className="about-container-info">
            <img src={Img2} alt="my" className="about-headshot" />
            
    <p>Centered in Darlington, UK, I am a front-end developer who builds clean, user-friendly web apps. 
I always strive to make code more readable and concentrate on reusable components that are modular. 
My skills are in HTML, CSS and Javascript with a focus on React.js</p>
</div>
    </div>
        </div>
        </div>
        </>
    )
}

export default About
