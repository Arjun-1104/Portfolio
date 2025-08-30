import React from 'react'
import assets from '../assets/assets'
const Contact = () => {
  return (
    <div id="contact" className='mt-20  w-full p-5 scroll-mt-20'>
        <div className='flex items-center justify-center gap-3 mb-15'>
            <img src={assets.contactIcon} className='w-8 h-8' alt='Project Icon' />
            <p className='text-white/80 text-3xl tracking-wider'>Contact</p>
        </div>
        <div className='bg-[#c5ba22] px-3'>
            <div className='space-y-4'>
                <h2 className='text-xl font-semibold'>ddgdgdgdg dgg</h2>
                <p>gkkgjgk dkgjkd dkdjkjfkfhjfh khjrkfhjfkfjhfkhjf</p>
                <div className='flex gap-3'>
                <img src={assets['githubIcon']} alt="image" className='w-10 h-10  p-1.5 rounded-full bg-blue-500'/>
                <img src={assets['githubIcon']} alt="image" className='w-10 h-10  p-1.5 rounded-full bg-blue-500'/>
                <img src={assets['githubIcon']} alt="image" className='w-10 h-10  p-1.5 rounded-full bg-blue-500'/>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact;