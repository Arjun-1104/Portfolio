import React from 'react'
import assets from '../assets/assets'
import { skillsData } from '../data/data'

const Skills = () => {
  return (
    <div id="skills" className='mt-20 scroll-mt-20 flex flex-col items-center'>
        <div className='flex items-center justify-center gap-3 mb-15'>
            <img src={assets.laptop} className='w-8 h-8' alt='image' />
            <p className='text-white/80 text-3xl tracking-wider'>Skills</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center sm:mx-30 sm:w-[55%] md:w-[70%] lg:w-[70%] xl:w-[60%] gap-y-10'>
            {skillsData.map((item)=> {
                return <div key={item.id} className='bg-white/7 flex flex-col items-center justify-center gap-4 md:gap-2 w-40 h-42 md:w-40 md:h-42 rounded-lg transition-all duration-400 hover:scale-105'>
                <img src={item.image} className='w-15 h-15 md:w-10 md:h-10' alt="image" />
                <p className='text-xl md:text-base text-[#c5ba22] font-semibold tracking-widest'>{item.label}</p>
            </div>
            })}
        </div>
    </div>
  )
}

export default Skills;