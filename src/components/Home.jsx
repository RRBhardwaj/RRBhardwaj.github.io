import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HeroImage  from "../assests/heroImage.png";


const Home = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1YMvMriZc_m7JEJlgowI7bQgbKZWYEDL7/view?usp=share_link', '_blank');
    const link = document.createElement('a');
    link.download = 'Rishi_Bhardwaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
  }
  return (
    <div name="home" className='w-full h-150vh md:min-h-fit py-12 bg-gradient-to-b from-[#0a1a32] to-[#0c1f3c] md:py-14 sm:py-16 min-h-fit'>
        {/* container */}
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full'>
            <p className='text-2xl text-green-300'>Hi, my name is</p>
            <h2 className='text-4xl sm:text-5xl font-bold text-white'>Rishi Raj Bhardwaj</h2>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-300'>I am a Full Stack Web Developer</h2>
            <p className=' text-gray-300 py-4 max-w-md'>Specializing in building Frontend of Websites and Web Applications that leads to the success of the overall product </p>
            <div>
              <a className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer' href='Rishi_Bhardwaj_Resume.pdf' target="_blank" download={true} rel="noreferrer" onClick={handleClick}>
                 Resume
                 <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="MyImage" className='rounded-3xl mx-auto w-3/5 md:w-full sm:my-2'/>
          </div>
        </div>
        
    </div>
  )
}

export default Home
