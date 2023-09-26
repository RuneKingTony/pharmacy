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
    description: 'Event Highlights',
  },
  {
    id: 3,
    image: '../assets/images/image13.jpeg',
    title: 'Image 3',
    description: 'Event Highlights',
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
    description:
      'Certificate of Appreciation from the FCT Primary health care Board',
  },
  // Add more carousel items here
];

const Gallery = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div className="carousel">
      <div className="box max-h-vh ">
        <Carousel
          // activeIndex={index}
          // onSelect={handleSelect}
          useKeyboardArrows={true}
          className="carousel"
          id="carousel"
          showThumbs={false}
        >
          {carouselItems.map((items, index) => (
            <div className="max-h-max">
              <img
                className="d-block w-100 "
                src={items.image}
                alt={items.title}
                style={{
                  maxHeight: 500,
                  objectFit: 'contain',
                }}
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
