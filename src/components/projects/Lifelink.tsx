import React, { useEffect } from 'react'
import FullLifelink from "../../assets/FullLifelink.jpg"
import { Link } from 'react-router-dom'
import { TripOrigin } from '@mui/icons-material';

const Lifelink: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className='w-full pt-32'>
        <h1 className='text-center text-4xl xl:text-5xl font-bold text-gray-800 '>LifeLink: Online Doctors Consultation</h1>
        <div className="w-full items-center justify-center align-middle mx-auto my-4 py-2">
            <img alt="Computer Mockup" loading="lazy" className="mx-auto object-contain lg:max-w-[1240px] sm:h-[500px] border sm:p-4 rounded-xl"  src={FullLifelink}></img>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 sm:px-12 lg:px-2">
            <div className='col-span-4'>
                <p className="text-xl tracking-widest uppercase text-[#5791b5]">Skills</p>
                <h2 className="py-4 font-bold text-3xl sm:text-4xl text-gray-700">Overview</h2>
                <Link to="https://lifelink-indol.vercel.app/">
                <button className="px-8 py-2 mt-4 mr-8 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in">Demo</button>
                </Link>
                <Link to="https://github.com/akshay07k/Lifelink">
                <button className="px-8 py-2 mt-4 mr-8 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in">Code</button>
                </Link>

                <p className='mt-8 mb-4 lg:text-lg'>
                Welcome to the HealthCare Website project! This web application serves as a comprehensive platform for users to access a wide range of healthcare services online. From consulting with doctors to locating nearby hospitals and accessing blood services, our goal is to provide a seamless and user-friendly experience for all healthcare needs.
                </p>
                <p className='mb-8 lg:text-lg'>
                User Registration and Authentication: Seamlessly register and authenticate users to access the website's functionalities securely. <br />
                Online Consultation: Schedule appointments and consult with doctors remotely, ensuring convenient access to medical advice.
                Hospital Locator: Utilize the built-in feature to locate nearby hospitals based on the user's location, ensuring quick access to medical facilities. <br />
                Blood Services: Facilitate blood donation and requests, enabling users to contribute to and benefit from life-saving blood services. <br />
                Doctor Rating System: Empower users to rate and provide feedback on their consultation experiences, ensuring transparency and quality assurance.
                </p>
            </div>
            <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 lg:h-[55%]">
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-2 md:grid-cols-1'>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; React - Vite</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Tailwind CSS</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Javascript</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Redux</p>
                        <p className="text-gray-600 py-2 flex items-center"><TripOrigin sx={{fontSize: 12}}/> &nbsp; Appwrite</p>
                    </div>
                </div>
            </div>
        </div>
        <Link to={'/#projects'}>
        <p className='underline cursor-pointer text-lg mb-3 px-4 sm:px-8 py-2'>Back</p>
        </Link>
    </div>
  )
}

export default Lifelink