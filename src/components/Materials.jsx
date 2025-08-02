import React from 'react';
import material1 from '../assets/material1.png';
import material2 from '../assets/material2.png';
import material3 from '../assets/material3.png';
import ButtonIcon from './ButtonIcon';

const Materials = () => {
  return (
    <section className='section-container my-24'>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className='lg:w-2/5'>
          <h3 className='uppercase text-lg font-semibold text-orange-500 mb-4'>Our Materials</h3>
          <h2 className='text-4xl font-bold capitalize mb-4'>Crafted with Passion, Built to Last</h2>
          <p className='text-gray-600 mb-6'>
            We believe that great furniture starts with exceptional materials. That's why we source only the finest, sustainably-harvested woods and premium fabrics to create pieces that are not only beautiful but also durable and eco-friendly.
          </p>
          <ButtonIcon text="Learn More"/>
        </div>
        {/* Image section */}
        <div className='lg:w-1/2'>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[540px]">
            <div className="row-span-2 overflow-hidden rounded-lg group">
              <img
                src={material3}
                alt="A beautifully crafted wooden chair in a well-lit room"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                src={material1}
                alt="Close-up of high-quality wood grain texture"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                src={material2}
                alt="A stack of premium, soft furniture fabrics"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials