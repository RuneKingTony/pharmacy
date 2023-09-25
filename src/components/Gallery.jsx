import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sprite from './sprite.svg';

// Define an array of carousel items
const carouselItems = [
  {
    id: 1,
    image: '../assets/images/imaged.jpeg',
    title: 'Highlights',
    description:
      'The Executive Director, Pharma-AID Africa, Dr. Chinedu Ayogu receiving a letter of gratitude from the Director of Pharmacy, FCT PHC Board, Hajia Aishatu Ahmed-Fari.',
  },
  {
    id: 2,
    image: '../assets/images/image12.jpeg',
    title: 'Image 2',
    description: 'Description for Image 2',
  },
  {
    id: 3,
    image: '../assets/images/image13.jpeg',
    title: 'Image 3',
    description: 'Description for Image 3',
  },
  {
    id: 4,
    image: '../assets/images/image111.jpeg',
    title: 'Image 4',
    description: 'Description for Image 4',
  },
  {
    id: 5,
    image: '../assets/images/cert.jpeg',
    title: 'Image 5',
    description: 'Description for Image 5',
  },
  // Add more carousel items here
];

const Gallery = () => {
  return (
    <div className="carousel">
      <div className="box max-h-vh ">
        <Carousel useKeyboardArrows={true} className="carousel-style">
          {carouselItems.map((items, index) => (
            <div className="max-h-max">
              <img
                src={items.image}
                alt={items.title}
                style={{ maxHeight: 1000 }}
              />
              <p className="legend">{items.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
