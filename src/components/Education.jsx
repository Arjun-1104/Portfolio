import React from 'react'
import assets from '../assets/assets'
import { educationData } from '../data/data'

const Education = () => {
  return (
    <div id="education" className='mt-20  p-5 scroll-mt-20 w-[90%]'>
        <div className='flex items-center justify-center gap-3 mb-15'>
            <img src={assets.educationIcon} className='w-8 h-8' alt='Project Icon' />
            <p className='text-white/80 text-3xl tracking-wider'>Education</p>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-3 place-items-center justify-center space-y-10'>
            {educationData.map((item)=> {
                return <div key={item.id} className='tracking-widest space-y-3 bg-white/7 w-[90%] py-7 px-5 rounded-lg transition-all duration-400 hover:scale-105'>
                <h2 className='text-[#c5ba22] text-xl'>{item.course}</h2>
                <p className='text-blue-500 text-xs'>{item.year}</p>
                <p className='text-green-500 text-xs'>{item.percentage}</p>
                <p className='text-white/80 text-base'>{item.institute}</p>
                <img src={item.image} alt="image" className='w-80 mt-10' />
            </div>
            })}
        </div>
    </div>
  )
}

export default Education;