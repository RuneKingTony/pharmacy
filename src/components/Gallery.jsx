import React, { useState, useEffect } from 'react';


const Gallery = () => {
  // Sample data array of carousel items
  const carouselItems = [
    {
      id: 1,
      image: '',
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      id: 2,
      image: 'https://placehold.it/800x400',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      id: 3,
      image: 'https://placehold.it/800x400',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    // Add more carousel items here...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="relative">
      <div className="w-full h-96 overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;