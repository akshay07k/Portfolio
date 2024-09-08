import React from 'react'
import { useRefContext } from '../contexts';
import ProfilePhoto from '../assets/profile.jpeg'
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {

  const { aboutRef } = useRefContext()

  return (
    <div id="about-section" ref={aboutRef}  className="animate-slidein opacity-0 [--slidein-delay:800ms] w-full px-4 sm:px-8 flex items-center max-w-7xl mx-auto mt-5">
      <div className='flex flex-col'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-bold text-gray-800'>About</h1>
        <div className="border-2 border-[#5791b5] mt-2 sm:w-[190px] w-[115px]"></div>

        <div className='flex flex-col md:flex-row pt-8 md:pt-12'>
          <div className='flex basis-1/2 mb-8 sm:mt-0 justify-center sm:mr-8'>
          <img alt="akshay"  className="rounded-full shadow-2xl shadow-black/70 mt-8 h-80 w-80 md:h-96 md:w-96 object-cover md:mt-0 bg-gradient-to-r from-[#306279] to-[#5791b5] " src={ProfilePhoto}></img>
          </div>
          <div className='flex flex-col basis-1/2  items-center md:items-start'>
            <p className='block text-base sm:text-lg md:text-xl mb-2'>
              Hi, my name is Akshay Kumar and I am a full stack developer that specializes in ReactJS, Javascript, TypeScript, the MERN stack, and NextJs.
            </p>
            <p className='block text-base sm:text-lg md:text-xl mb-2'>
            I'm 3rd year Computer Science Student, pursuing Bachelor of Engineering in Computer Science from Chitkara Univerity, Himachal Pradesh.
            </p>
            <p className='block text-base sm:text-lg md:text-xl'>
            I'm passionate about new technologies and solving problems, always eager to explore the latest trends in software development. As a competitive programmer with a rating of 974 on Codeforces, I continually push myself to solve complex algorithms and optimize solutions. This drive for improvement keeps me focused on building efficient and scalable applications.
            </p>
            
            <button className='w-2/3 sm:w-1/3 py-2 mt-8 md:mt-16 rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition duration-300 ease-out'>
            <Link to={'https://drive.google.com/file/d/1FHwVA3YC_3GfmnrQkvgQYtTOw0m1rFLf/view?usp=sharing'}>Resume</Link>
            </button>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutSection
