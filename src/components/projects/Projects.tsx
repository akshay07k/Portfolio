import React from 'react'
import LifelinkProject from '../../assets/LifelinkProject.png'
import YoutubeProject from '../../assets/YoutubeProject.png'
import { Link } from 'react-router-dom'
import { useRefContext } from '../../contexts'

const Projects: React.FC = () => {

  const { projectRef } = useRefContext()
  return (
    <div id='projects' ref={projectRef} className='w-full pt-28 sm:mt-10 px-8'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='block text-xl tracking-widest uppercase text-[#5791b5]'>Projects</p>
            <h2 className='py-4 text-3xl sm:text-4xl font-bold m-0 text-gray-800'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#306279] to-[#5791b5]">
                <img loading='lazy' src={LifelinkProject} alt="" className='bg-transparent rounded-xl group-hover:opacity-10 w-[1243px]  object-cover'/>
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h2 className='text-gray-200 sm:text-white text-6xl absolute top-[-100px] left-[-50px] font-bold'>01</h2>
                  <h3 className='text-2xl text-white text-center tracking-wider font-bold'>LifeLink: Online Doctors Consultation</h3>
                  <p className='text-white text-center pb-4 pt-2'>React JS & Appwrite</p>
                  <Link to='/lifelink' >
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                  </Link>
                </div>  
              </div> 
              <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#306279] to-[#5791b5]">
                <img loading='lazy' src={YoutubeProject} alt="" className='bg-transparent rounded-xl group-hover:opacity-10 w-[1243px]  object-cover h-80 md:h-96 xl:h-[540px] '/>
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h2 className='text-white text-6xl absolute top-[-100px] left-[-50px] font-bold'>02</h2>
                  <h3 className='text-2xl text-white text-center tracking-wider font-bold'>Complete Backend: Video Hosting App</h3>
                  <p className='text-white text-center pb-4 pt-2'>Express JS & MongoDB</p>
                  <Link to='/backend-youtube' >
                  <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                  </Link>
                </div>  
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Projects