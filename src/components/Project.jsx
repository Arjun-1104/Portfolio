import React from 'react'
import assets from '../assets/assets'
import { projectsData } from '../data/data';

const Project = () => {
  return (
    <div id="projects" className='mt-20 bg-white/7 w-full p-5 scroll-mt-20'>
        <div className='flex items-center justify-center gap-3 mb-15'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADm0lEQVR4nO2bz2sUMRTHt0XR1nNrkbbQCkJ71ptHb1Y9rC0eWkFEz/2BeBBl8CQiIqwWBS/uYgX1D/Aq+geoa4uK3vQkWvEm2P1IaLZm02QmszOpdidfCGXnhbzk23zfvLyZKZU0AHuAE8A8cLFD2hxwHOjV17sBoAu4APygc7EKLIi16ovvBpYoDh62kMD6f75omFc138nbPk4OvSUZHIqKiZIMCjasAVXgmmxVec3V3g70MbO0pPnMCwKimA4PWqLlumSqKeztYNOYWZAwnyiJgKphwFoKezuo5kxALQsBa3KAZkJRM0ggzt4O9DGztKT5REkEdDqiQABhB1B4CcxQXEw3D0LTOSUe26mJNXfnecsN2JZgXQIz/0HVZqubWHO3IOA0xcVMyAMIeQCFT4QiiosoSIAgAYIEKC6iIAGCBAgSIBmfgfvAF4u9DlwGXlvsy9L+IeUDEP3BxnvgutbnJvAcaOAxBozLk+O4wSYcD0n7kGEi4vewtB9I+wBEe7AxGtPvEPDJFwEDiqN3mq2uTaRuswP7WpynfLDh0HcY+OqDgLLi5K5mq2iTqNjswJSJAOCwy4MNzU+zz1lgl3J9wQcBFcXBKRs50l622YFFCwFOgVjzo+KJcn3EZayNOeDmXN3GA4rOxd8+bWJ9Njuw4omAn8r1Hre1yzng5ty2kBb9G+KAStxeLUDmScBj5fqY29rTJ0Jlxckdk/4NccCm/zwIaN4Gz2gx4JIvAiqKk0kDKWOGOGDT/7rzv7YjLnmAiWwD+fd8EVBXnPTLiamyWNLiwO8Y/bcQ4JoHOPYXr/vd8kFAQ1vQI23BcYTo+s+cB2i3y/NarrITeJU3AS5b/qTFrus/jzxAx3eRDSp2ERtyJ6CSEPRuW+yLCQRkvQs08VKxj/ogoJ5w23trsa9sEQFqPrDbBwENh8SnX7Ob9O+LgBeKXRzMvFSEygmp76Rmn7I6z5eAb8BB3zHA5fBzx0H/mfMArd857S6wQ9YgvBBQTzj+Ljvov4UAD3lAM1P1QkADGFTO36YCyIi074+p1FTbeNFxNKHvIPB0K6rCb4ArMdtMlL5uAB8zvhCpv+goxr1q6CfKYs+AXynXEYWqMKEqTCiLU1xEQQIECZCmjNxpmBM74BjFxVFBQK/8hKxoEAWUnmYKWUQZzOoHCPE5aVFQM30/3CW/GF/t8G0/u2nxpVYiREwQgVF8cv6v3+nPq4m1TGxoXsEff5woMxs7unIAAAAASUVORK5CYII=" className='w-8 h-8' alt='Project Icon' />
            <p className='text-white/80 text-3xl tracking-wider'>Projects</p>
        </div>

        <div className='space-y-30 w-[90%]' >
          {projectsData.map((item) => {
            return <div key={item.id} className={`w-full space-y-10 md:space-y-0 flex flex-col  ${(item.id % 2 == 0)? 'md:flex-row-reverse': 'md:flex-row'} items-start md:items-center justify-center md:justify-between`}>
              <div className='w-full md:w-[45%]'>
                <img src={item.image} alt="image" className='rounded-xl'/>
              </div>
             <div className='space-y-4 md:w-[45%]'>
            <h2 className='text-2xl font-bold text-blue-500'>{item.label}</h2>
              <p className='text-white/70 text-sm tracking-wide'>{item.desc}</p>
              <div className='text-[#c5ba22] text-lg flex gap-4'>
                {item.languageUse.map((lang,idx)=> {
                  return <span key={idx}>{lang}</span>
                })}
              </div>
              <div className='flex items-center gap-3'>
                <a href='/' target='_blank' download="resume" className=''>
            <button className='flex items-center justify-center rounded-full gap-3 py-2 px-4  bg-[#c5ba22] hover:bg-[#e3d514] transition-all duration-400 cursor-pointer'>
                <img src={assets['takeLookIcon']} className='w-4 h-4' alt='image'/>
                <p className='font-semibold text-base tracking-widest'>Take a Look</p>
            </button>
            </a>
                <img src={assets['githubIcon']} alt="image" className='w-10 h-10 p-1.5 rounded-full bg-blue-500'/>
                </div>
            </div>
          </div>
          })}
        </div>
    </div>
  )
}

export default Project;