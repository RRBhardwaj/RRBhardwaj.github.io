import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
 
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-400 text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#bceaf4]'>Rishi Raj Bhardwaj</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#a5b3df]'>I am a Full Stack Web Developer.</h2>
            <p className='text-[#a5b3df] py-4 max-w'>I am a full-stack web developer specializing in building Frontend of Websites and Web Applications that leads to the success of the overall product </p>
        </div>
        <div>
            <button> View Work <HiArrowNarrowRight /></button>
        </div>
    </div>
  )
}

export default Home