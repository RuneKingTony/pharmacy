import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-100 py-16" id='about'>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">About <span className='text-green'>Pharma-AID Africa</span></h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="assets/images/passion.jpeg"
              alt="About Us"
              className="rounded-lg object-cover w-full h-auto mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
            Pharmaceutical Market Access Initiative and Development for Africa (Pharma-AID Africa) is a non- governmental organization committed to closing the gap in access to medicine amongst the most vulnerable communities in Nigeria and Africa, essentially in strengthening the supply chain system of identified primary Health Centres in these communities.
            </p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
