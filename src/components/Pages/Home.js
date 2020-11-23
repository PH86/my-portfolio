import React from 'react';
import HeroSection from '../HeroSection.js'
import Img from '../../Images/img-02.jpg'


function Home() {
    return (
        <>
           <HeroSection 
           src={Img} 
           pageName="Hi, I'm Peter Hodgson"
           pageDesc="Front End Developer"
           />
           

        </> 
    )
}

export default Home;

