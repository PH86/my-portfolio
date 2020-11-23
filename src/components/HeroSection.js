
import React from 'react';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection(props) {
    return (
        <div>
            <div className='hero-container'>
            <img src={props.src} alt="hero Img" />
            <h1>{props.pageName}</h1>
    <p>{props.pageDesc}</p>
           
           <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large" link="/my-portfolio/about">About Me</Button>
                
        </div>
        </div>
    );
}

export default HeroSection;
