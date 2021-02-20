import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Lab from '../Images/projectLab.png';
import Ecommerce from '../Images/ecommerce.png'
import Placeholder from '../Images/img-03.jpeg';
import Tempest from '../Images/projectTempest.png';
import Tile from '../Images/projectTile.png';
import NewsApp from '../Images/NewsApp.png';
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
              src={Ecommerce}
              text='E-commerce App'
             
              path='https://ph86.github.io/ecommerce'
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
              src={NewsApp}
              text='News App using external API'
              
              path='https://ph86.github.io/news-app/'
            />
            
           </ul>
        </div>
        </div>
      </div>
  );
}

export default Cards;