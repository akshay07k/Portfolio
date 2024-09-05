import React from 'react';
import AbstractBlue from '../assets/AbstractBlue.jpeg';
import { LinkedIn, Code, X, GitHub } from '@mui/icons-material';
import { useRefContext } from '../contexts';



const Home: React.FC = () => {

  const { homeRef } = useRefContext()
  
  return (
    <div id='home' ref={homeRef} className='w-full text-center relative pt-32 pb-20 md:py-40 h-full'>
      <img alt="blur1" className="animate-pulse z-[-1] absolute h-full w-full  left-0 top-0 right-0 bottom-0 object-cover bg-transparent opacity-30" src={AbstractBlue}></img>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className='animate-slidein opacity-0 [--slidein-delay:300ms] uppercase text-sm tracking-widest text-gray-700'>Lets Build Something Together</p>

          <h1 className='animate-slidein opacity-0 [--slidein-delay:300ms] py-4 text-gray-700 text-4xl leading-9 font-bold sm:text-5xl sm:leading-[1]'>
          {`Hi, I'm `}
          <span className='text-[#f15627]'>Akshay</span>
          </h1>

          <h1 className='animate-slidein opacity-0 [--slidein-delay:500ms] py-2 text-gray-700 text-4xl leading-9 font-bold sm:text-5xl sm:leading-[1]'>
          <span>A Full-Stack Software Engineer </span>
          <span className='typed-cursor typed-cursor--blink'>|</span>
          </h1>

          <p className="animate-slidein opacity-0 [--slidein-delay:700ms] py-4 text-lg text-gray-600 max-w-[70%] m-auto">
          I'm a Full-Stack Software Engineer focused on creating intuitive and efficient software solutions.
          </p>
          <div className='animate-slidein opacity-0 [--slidein-delay:800ms] flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href="https://github.com/akshay07k">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <GitHub />
            </div>
            </a>
            <a href="https://x.com/Akshay_07k">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <X />
            </div>
            </a>
            <a href="https://codeforces.com/profile/akshay07k">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Code />
            </div>
            </a>
            <a href="https://www.linkedin.com/in/akshay-kumar-618829261">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <LinkedIn />
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
