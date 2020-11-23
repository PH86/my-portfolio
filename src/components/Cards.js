import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Lab from '../Images/projectLab.png';
import Placeholder from '../Images/img-03.jpeg';
import Tempest from '../Images/projectTempest.png';
import OriginalPort from '../Images/origin-Portfo.png';


function Cards(props) {
  return (
    <div className='cards'>
     <div className="cards__container">
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src={Lab}
              text='Martial Arts Gym App'
             
              path='https://ph86.github.io/gym-app/'
            />
            <CardItem
              src={Placeholder}
              text='Comic Store App'
             
              path=''
            />
          
          
            <CardItem
              src={Tempest}
              text='Tempest Automation'
              
              path='https://ph86.github.io/tempest-app'
            />
            
           </ul>
           <ul className='cards__items'>
            <CardItem
              src={Placeholder}
              text='Tile Company'
             
              path='/'
            />
            <CardItem
              src={Placeholder}
              text='Miniature Projects'
             
              path='/services'
            />
          
          
            <CardItem
              src={OriginalPort}
              text='HTML and CSS Portfolio'
              
              path='https://ph86.github.io/portfolio-original/'
            />
            
           </ul>
        </div>
        </div>
      </div>
  );
}

export default Cards;