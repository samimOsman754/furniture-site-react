import React from 'react'
import contactBgImg from '../../assets/contact-background.jpg'
import Materials from '../../components/Materials'
import Testimonials from '../../components/Testimonials'

const Contact = () => {
  return (
    <section>
      {/* Banner */}
      <div className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white' style={{
        backgroundImage: `url(${contactBgImg})`}}>
          <div>
            <h1 className='text-4xl font-bold underline underline-offset-4'>Contact Us</h1>
          </div>
        </div>
        <Materials/>
        <Testimonials/>
    </section>
  )
}

export default Contact