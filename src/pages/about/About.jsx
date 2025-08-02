import React from 'react'
import aboutBgImg from '../../assets/about-background.jpg'
import Expriences from '../../components/Expriences'

const About = () => {
  return (
    <section>
      {/* Banner */}
      <div className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white' style={{
        backgroundImage: `url(${aboutBgImg})`}}>
          <div>
            <h1 className='text-4xl font-bold underline underline-offset-4'>About Page</h1>
          </div>
        </div>
        <Expriences/>
    </section>
  )
}

export default About