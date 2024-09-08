import React, { RefObject, useState, MouseEvent } from 'react'
import Imglogo from '../assets/Imglogo.png'
import {Close, DensityMedium, Instagram, X, GitHub} from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { useRefContext } from '../contexts';

const Navbar: React.FC = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false)

    const { homeRef, aboutRef, contactRef, skillRef, projectRef } = useRefContext()

    const scrollToSection = (
            sectionRef: RefObject<HTMLDivElement> | null, 
            e: MouseEvent<HTMLAnchorElement>
        ): void => {

        e.preventDefault();

        if(sectionRef && sectionRef.current){
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function toggleAside() {
        setIsAsideOpen(!isAsideOpen);
    }
 
    return (
        <nav className="fixed border-b-2 w-full h-20 z-[100] bg-[#ffffff]">
            <div className="flex justify-between max-w-7xl mx-auto items-center h-full w-full px-4 2xl:px-16">
            <a href="/"> 
            <img className='h-14 w-20' src={Imglogo} alt="" />
            </a>   
            <div className='sm:flex gap-8'>
            <div className='hidden sm:flex scroll-smooth'>
                <ul className='hidden sm:flex items-center  justify-around xl:gap-6'>
                    <NavLink to="/" 
                    onClick={(e) => scrollToSection(homeRef, e)}
                    >
                    <li className='ml-10 uppercase font-semibold hover:text-[#306279] lg:text-xl'>Home</li>
                    </NavLink>
                    <NavLink to="/#about-section" 
                    onClick={(e) => scrollToSection(aboutRef, e)}
                    >
                    <li className='ml-10 uppercase font-semibold hover:text-[#306279] lg:text-xl whitespace-nowrap'>About me</li>
                    </NavLink>
                    <NavLink to="/#projects"
                    onClick={(e) => scrollToSection(projectRef, e)}
                    >
                    <li className='ml-10 uppercase font-semibold hover:text-[#306279] lg:text-xl'>Projects</li>
                    </NavLink>
                    {/* <NavLink to="/#skills"
                    onClick={(e) => scrollToSection(skillRef, e)}
                    >
                    <li className='ml-10 uppercase font-semibold hover:text-[#306279] lg:text-xl'>Skills</li>
                    </NavLink> */}
                    <NavLink to="/#contact"
                    onClick={(e) => scrollToSection(contactRef, e)}
                    >
                    <li className='ml-10 uppercase font-semibold hover:text-[#306279] lg:text-xl'>Contact</li>
                    </NavLink>
                </ul>
            </div>
            <div>
                <a href='https://drive.google.com/file/d/1FHwVA3YC_3GfmnrQkvgQYtTOw0m1rFLf/view?usp=sharing'>
                <button className="hidden sm:flex className='mt-8 w-full justify-center py-2 px-4 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in">Resume</button>    
                </a>
            </div>
            </div>
            <div onClick={toggleAside} className='sm:hidden cursor-pointer pl-24'>
                <DensityMedium />
            </div>
            </div>
            <div className={`fixed ${isAsideOpen ? "left-0 w-[65%] sm:hidden h-screen bg-[#ffffff] z-10" : "left-[-100%]"} top-0 p-10 ease-in duration-500`}>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={toggleAside} className='cursor-pointer'>
                        <Close />   
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul>
                        <NavLink to="/#home" 
                        onClick={(e) => scrollToSection(homeRef, e)}
                        >
                        <li className='py-4 cursor-pointer'>Home</li>
                        </NavLink>
                        <NavLink to="/#about-section" 
                        onClick={(e) => scrollToSection(aboutRef, e)}
                        >
                        <li className='py-4 cursor-pointer'>About Me</li>
                        </NavLink>
                        <NavLink to="/#projects" 
                        onClick={(e) => scrollToSection(projectRef, e)}
                        >
                        <li className='py-4 cursor-pointer'>Projects</li>
                        </NavLink>
                        <NavLink to="/#skills" 
                        onClick={(e) => scrollToSection(skillRef, e)}
                        >
                        <li className='py-4 cursor-pointer'>Skills</li>
                        </NavLink>
                        <NavLink to="/#contact" 
                        onClick={(e) => scrollToSection(contactRef, e)}
                        >
                        <li className='py-4 cursor-pointer'>Contact Me</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex flex-row justify-around py-10 items-center'>
                
                    <Link to={"https://www.instagram.com/axay_iio"}>
                        <Instagram fontSize='medium'/>
                    </Link>

                    <Link to={"https://x.com/Akshay_07k"}>
                        <X />
                    </Link>

                    <Link to={"https://github.com/akshay07k"}>
                        <GitHub />
                    </Link>
                </div>
                <a href="/">
                <img className='h-14 w-20 mx-16' src={Imglogo} alt="" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar