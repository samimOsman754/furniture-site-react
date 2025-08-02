import React from 'react'
import expricencesImg from '../assets/expricences.png'
import ButtonIcon from './ButtonIcon'

const Expriences = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 px-4 md:px-0'>
        <div className='md:w-1/2 md:h-[541px]'>
            <img src={expricencesImg} alt="" className='h-ful w-full'/>
        </div>
        <div className='md:w-1/2 mx-auto'>
            <h3 className='uppercase text-lg font-semibold text-orange-500 mb-4'>Experiences</h3>
            <h2 className='capitalize text-4xl font-bold lg:w-1/2 mb-4'>We provide you the best experiences</h2>
            <p className='text-gray-800  mb-5 lg:w-2/3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut repellat perspiciatis minima non alias dolores consectetur nobis, dolore animi ea!</p>
            <ButtonIcon text="More Info"/>
        </div>
    </section>
  )
}

export default Expriences