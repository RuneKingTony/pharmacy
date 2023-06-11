import React from 'react'


const Hero = () => {
  
  const backgroundImage = 'url("assets/images/pharmback.jpeg")';


  return (
    
      <div className="bg-cover bg-center" style={{ backgroundImage }} id="hero">
      <div className= "max-w-7xl mx-auto px-4 sm:px-6 ">

        <div className="flex flex-col items-center justify-center py-40 text-center">
          <h1 className="font-bold text-lg text-white p-4">
           Welcome to
          </h1>
          <h1 className="text-4xl font-bold text-green sm:text-5xl md:text-6xl">
           Pharma-AID <span className="text-white">Africa</span>
          </h1>
          <p className="mt-4 text-xl text-white pt-4">
          Helping to overcome the barriers in patient access and market access to medicine in Nigeria and Africa at large.
         </p>
         <div className="mt-8 p-4">
            <a
              href="#"
              className="bg-green text-white rounded-full px-8 py-3 text-xl font-semibold shadow-lg"
            >
              Get Started
            </a>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
