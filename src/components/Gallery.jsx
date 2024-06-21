import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './gallery.css';

const Gallery = () => {
  const [year, setYear] = useState(2023); // Initial year

  const carouselItems = {
    2023: [
      {
        id: 1,
        image: '/assets/images/imaged.jpeg',
        title: 'Highlights',
        description:
          'The Executive Director, Pharma-AID Africa, Dr. Chinedu Ayogu receiving a letter of gratitude from the Director of Pharmacy, FCT PHC Board, Hajia Aishatu Ahmed-Fari.',
      },
      {
        id: 2,
        image: '/assets/images/image12.jpeg',
        title: 'Image 2',
        description: 'Event Highlights',
      },
      {
        id: 3,
        image: '/assets/images/image13.jpeg',
        title: 'Image 3',
        description: 'Event Highlights',
      },
      {
        id: 4,
        image: '/assets/images/image111.jpeg',
        title: 'Image 4',
        description: 'Event highlights',
      },
      {
        id: 5,
        image: '/assets/images/cert.jpeg',
        title: 'Image 5',
        description:
          'Certificate of Appreciation from the FCT Primary health care Board',
      },
    ],
    2024: [
      {
        id: 6,
        image: '/assets/images/paid/paid11.jpeg',
        title: 'Community Outreach Event',
        description:
          'Pharma-AID Africa and partners kick off 2024 with a health and wellness outreach at Aguluzigbo, Anambra State, providing vital healthcare services to over 200 community members.',
      },
      {
        id: 7,
        image: '/assets/images/paid/paid888.jpeg',
        title: 'Community Outreach Event',
        description:
          'Highlights',
      },
      {
        id: 7,
        image: '/assets/images/paid/Paid 04.jpeg',
        title: 'Community Outreach Event',
        description:
          'The Chief Matron of the Aguluzigbo facility receives donated medications, ensuring better healthcare for the community.',
      },
      {
        id: 7,
        image: '/assets/images/paid/paid009.jpeg',
        title: 'Community Outreach Event',
        description:
          'His Royal Majesty, Igwe Rufus ILuoduba, welcomes the Pharma-AID Africa team to his palace, showing support for their community health initiatives.',
      }, {
        id: 7,
        image: '/assets/images/paid/paid090.jpeg',
        title: 'Community Outreach Event',
        description:
          'His Royal Majesty, Igwe Rufus ILuoduba, welcomes the Pharma-AID Africa team to his palace, showing support for their community health initiatives.',
      },
    
      {
        id: 7,
        image: '/assets/images/paid/paid555.jpeg',
        title: 'Community Outreach Event',
        description:
          'Pharma-AID Africa team engages with community leaders and members, emphasizing the importance of health awareness and equitable access to medicine.',
      },
    ],
  };

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  return (
    <div className="carousel-container">
      <div className="year-navigation">
        <button
          className={`year-button ${year === 2023 ? 'active' : ''}`}
          onClick={() => handleYearChange(2023)}
        >
          2023
        </button>
        <button
          className={`year-button ${year === 2024 ? 'active' : ''}`}
          onClick={() => handleYearChange(2024)}
        >
          2024
        </button>
      </div>
      <div className="carousel-box">
        <Carousel
          useKeyboardArrows={true}
          className="carousel"
          id="carousel"
          showThumbs={false}
        >
          {carouselItems[year].map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  maxHeight: 500,
                  objectFit: 'contain',
                }}
              />
              <p className="legend">{item.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
