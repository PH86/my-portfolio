import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Lab from '../Images/projectLab.png';
import Placeholder from '../Images/img-03.jpeg';
import Tempest from '../Images/projectTempest.png';
import Tile from '../Images/projectTile.png';
import OriginalPort from '../Images/origin-Portfo.png';
import JSProjects from '../Images/js-projects.png';


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
              src={Tile}
              text='Tile Company App'
             
              path='https://ph86.github.io/tile-app'
            />
            <CardItem
              src={JSProjects}
              text='Miniature Projects'
             
              path='https://ph86.github.io/js-projects/'
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