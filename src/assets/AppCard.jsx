// AppCard.js

import React, { Fragment } from 'react';
import './AppCard.css';

function AppCard() {
  return (
    <div className='main'>
      <Card
        image='/public/pic.jpg'
        headline='Swat district is also known as the Swat'
        detail='Swat District, also known as the Swat Valley, is a district in the Malakand Division of Khyber Pakhtunkhwa, Pakistan. With a population of 2,309,570 per the 2017 national census, Swat is the 15th-largest district of Khyber Pakhtunkhwa with many popular tourist attractions.'
      />
    </div>
  );
}

function Card(prop) {
  const image = prop.image;
  const headline = prop.headline;
  const detail = prop.detail;

  return (

    <div className='card'>
      <div className='text'>
        <img src={image} alt='pic' />
        <h2 className='card-title'>Swat</h2>
        <h3 className='card-headline'>{headline}</h3>
        <div className='card-detail'>{detail}</div>
      </div>
    </div>

  );
}

export default AppCard;
