import React,{ RefObject, MouseEvent } from 'react'
import { GitHub, LinkedIn, Mail, X, KeyboardDoubleArrowUp } from '@mui/icons-material'
import ContactForm from './ContactForm'
import { useRefContext } from '../../contexts'
import { NavLink } from 'react-router-dom'

const Contact: React.FC = () => {
    const { contactRef, homeRef } = useRefContext()

    const scrollToSection = (
            sectionRef: RefObject<HTMLDivElement> | null, 
            e: MouseEvent<HTMLAnchorElement>
        ): void => {

        e.preventDefault();

        if(sectionRef && sectionRef.current){
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div id='contact' ref={contactRef} className='w-full pt-20 px-4 sm:px-8'>
        <div className='max-w-[1240px] m-auto sm:px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5791b5]'>Contact</p>
            <h2 className='text-3xl sm:text-4xl font-bold py-4 text-gray-700'>Get In Touch</h2>
            <div className='grid lg:grid-cols-4 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl px-4 py-4'>
                    <div className='lg:p-4 h-full'>
                        <div className='w-full'>
                            <img loading="lazy" className='rounded-xl hover:scale-105 ease-in duration-300 bg-transparent h-full w-full' src="https://img.freepik.com/free-photo/close-up-man-writing-code-laptop_158595-5169.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 py-2'>Akshay Kumar</h2>
                            <p>FullStack Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4 sm:px-16'>
                                <a href="https://github.com/akshay07k">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <GitHub fontSize='small'/>
                                </div>
                                </a>
                                <a href="https://x.com/Akshay_07k">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <X fontSize='small'/>
                                </div>
                                </a>
                                <a href="/">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <Mail fontSize='small'/>
                                </div>
                                </a>
                                <a href="https://www.linkedin.com/in/akshay-kumar-618829261">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <LinkedIn fontSize='small'/>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <ContactForm />
                    </div>
                </div>
            </div>    
            <div className='flex justify-center py-12'>
                <NavLink to="/#home"
                onClick={(e) => scrollToSection(homeRef, e)}
                >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <KeyboardDoubleArrowUp fontSize='small' htmlColor='#5791b5'/>
                </div>
                </NavLink>    
            </div>          
        </div>
    </div>
  )
}

export default Contact