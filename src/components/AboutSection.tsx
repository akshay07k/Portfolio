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
              Hi, I'm Akshay Kumar — a Software Engineer focused on backend development and test automation. I work primarily with Java (Spring Boot), Node.js, and modern JavaScript/TypeScript, and I build automation frameworks with Karate DSL and Playwright.
            </p>
            <p className='block text-base sm:text-lg md:text-xl mb-2'>
            I recently completed my B.E. in Computer Science from Chitkara University (CGPA 9.7/10). At Salescode.ai I built a configurable, multi-project API test automation framework from scratch that now drives automation across 7+ client projects.
            </p>
            <p className='block text-base sm:text-lg md:text-xl'>
            I care about reliable systems and clean engineering — strong API contracts, solid test coverage, and efficient code. With 300+ DSA problems solved and a Flipkart GRiD 7.0 National Semi-Finalist finish, I enjoy hard problems and building things that scale.
            </p>
            
            <Link to={'https://drive.google.com/file/d/1U-wbZ_p0L9PpEwJ8eTpriFBgb3IBChlS/view?usp=sharing'} target='_blank'
            className='w-2/3 sm:w-1/3 py-2 mt-8 md:mt-16 rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition duration-300 ease-out text-center'>
            Resume
            </Link>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutSection
