import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HeroImage  from "../assests/heroImage.png";

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f] pt-8'>
        {/* container */}
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <p className='text-2xl text-green-300'>Hi, my name is</p>
            <h2 className='text-4xl sm:text-5xl font-bold text-white'>Rishi Raj Bhardwaj</h2>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-300'>I am a Full Stack Web Developer</h2>
            <p className=' text-gray-300 py-4 max-w-md'>I am a full-stack web developer specializing in building Frontend of Websites and Web Applications that leads to the success of the overall product </p>
            <div>
              <a className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer' href='Rishi_Bhardwaj_Resume.pdf' target="_blank" rel="noreferrer" download={true}>
                 Resume
                 <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="MyImage" className='rounded-3xl mx-auto w-1/3 md:w-full'/>
          </div>
        </div>
        
    </div>
  )
}

export default Home
