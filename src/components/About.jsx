// import  Button  from '../common/Button'
import React, { useRef } from 'react'
import assets from '../assets/assets'
import resume from '../assets/images/arjun_resume.pdf'

import { aboutData } from '../data/data'

const About = () => {
  const myImageRef = useRef(null);

  const onImageMouseMoveFunc = (e) => {
    let imagePosition = myImageRef.current.getBoundingClientRect();
    let mouseX = e.clientX - imagePosition.left;
    let mouseY = e.clientY - imagePosition.top;

    let dx = (mouseX - imagePosition.width / 2) / (imagePosition.width / 2);
    let dy = (mouseY - imagePosition.height / 2) / (imagePosition.height / 2);

    myImageRef.current.style.transform = ` rotateY(${dx * 10}deg) rotateX(${
      -dy * 10
    }deg)`;
    myImageRef.current.style.transition = ` transform 0.1s ease`;
  };

  const onImageMouseLeaveFunc = () => {
    myImageRef.current.style.transform = "";
    myImageRef.current.style.transition = ` transform 0.1s ease`;
  };

  const {preName, name, occupation, experience, workYear, description, shortLine, resumeTitle} = aboutData;
  return (
    <div id="about" className='px-3 sm:flex mt-20 scroll-mt-40'>
        <div className='sm:w-1/2 tracking-widest flex flex-col space-y-3'>
            <h3 className='text-gray-400 text-base font-semibold tracking-widerest'>{preName}</h3>
            <p className='text-6xl text-white font-semibold tracking-wider whitespace-pre-line'>{name}</p>
            <h2 className='text-[#c5ba22] text-4xl whitespace-pre-line'>{occupation}</h2>
            <p className='text-white/70 text-base'>
                {experience} <i className='text-xs text-white/60'>({workYear})</i>
            </p>

            <p className='text-white/60 text-sm leading-6'>{description}</p>
            <h3 className='text-white/80 '>{shortLine}</h3>
            <a href={resume} target='_blank' download="resume" className='w-50 my-5'>
            <button className='w-full flex items-center justify-center rounded-full gap-3 py-2 bg-[#c5ba22] hover:bg-[#e3d514] transition-all duration-400 cursor-pointer'>
                <img src={assets['cloud_download']} className='w-10 h-10' alt='image'/>
                <p className='font-semibold text-lg'>{resumeTitle}</p>
            </button>
            </a>
        </div>
        <div className="sm:w-1/2 myImageDiv pt-20 sm:pt-0 sm:my-auto">
            <img
              className="myImage w-[70%] sm:w-[90%] md:w-[60%] mx-auto"
              src={assets['myPic']}
              alt="my Image"
              ref={myImageRef}
              onMouseMove={onImageMouseMoveFunc}
              onMouseLeave={onImageMouseLeaveFunc}
            />
        </div>
    </div>
  )
}

export default About