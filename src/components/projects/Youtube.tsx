import React from 'react'
import FullYoutube from "../../assets/FullYoutube.png"
import { Link } from 'react-router-dom'
import { TripOrigin } from '@mui/icons-material';

const Youtube: React.FC = () => {
  return (
    <div className='w-full pt-32'>
        <h1 className='text-center text-4xl xl:text-5xl font-bold text-gray-800 '>Complete Backend: Video Hosting App</h1>
        <div className="w-full items-center justify-center align-middle mx-auto my-4 py-2">
            <img alt="Computer Mockup" loading="lazy" className="mx-auto object-contain lg:max-w-[1240px] sm:h-[500px] border rounded-xl"  src={FullYoutube}></img>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 sm:px-12 lg:px-2">
            <div className='col-span-4'>
                <p className="text-xl tracking-widest uppercase text-[#5791b5]">Skills</p>
                <h2 className="py-4 font-bold text-3xl sm:text-4xl text-gray-700">Overview</h2>
                <Link to="https://app.eraser.io/workspace/OUvwyGT8fKZQc1ldHpeT?origin=share">
                <button className="px-8 py-2 mt-4 mr-8 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in">Model</button>
                </Link>
                <Link to="https://github.com/akshay07k/Backend">
                <button className="px-8 py-2 mt-4 mr-8 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in">Code</button>
                </Link>

                <p className='mt-8 mb-4 lg:text-lg'>
                Built with Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, and more.
                A complete backend project with all necessary features for a robust backend.
                Designed to build a full-featured video hosting website similar to YouTube.
                </p>
                <p className='mb-8 lg:text-lg'>
                User Authentication: Login, signup, JWT authentication, bcrypt password hashing.
                Video Management: Upload, like, dislike videos.
                Comment System: Add comments and replies to videos.
                Subscription System: Subscribe and unsubscribe to channels.
                Standard Practices:
                JWT for secure authentication.
                Bcrypt for secure password hashing.
                Access tokens and refresh tokens for session management.
                Extensive Functionality: Covers all essential features required for a video hosting platform.

                </p>
            </div>
            <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 lg:h-3/4">
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-2 md:grid-cols-1'>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Node.js</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Express.js</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; MongoDB</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Mongoose</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; JWT</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Bcrypt</p>
                    </div>
                </div>
            </div>
        </div>
        <Link to={'/'}>
        <p className='underline cursor-pointer text-lg mb-3 px-4 sm:px-8 py-2'>Back</p>
        </Link>
    </div>
  )
}

export default Youtube