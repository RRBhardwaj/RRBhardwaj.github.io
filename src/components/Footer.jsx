import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div name="connect" className='w-full h-50vh bg-gradient-to-b from-[#14315a] to-[#1a417d] text-white py-12'>
        <div className='mx-auto px-4 m-auto justify-center items-center'>
          <p className='text-2xl font-bold border-b-4 border-gray-400 py-2 p-2 inline justify-content items-center'>Connect With Me</p>
        <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-8 py-6 px-5 text-center'>
            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 `}>
                <a className='flex justify-around items-center w-full text-gray-200' href="https://www.linkedin.com/in/rishi-raj-bhardwaj" target="_blank" rel="noreferrer" id="contact-linkedin">Linkedin<FaLinkedin size={30}/></a>
            </div> 
            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-300`}>
                <a className='flex justify-around items-center w-full text-gray-200' href="https://github.com/RRBhardwaj" target="_blank" rel="noreferrer" id="contact-github">Github<FaGithub size={30}/></a>
            </div>
            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-300`}>
              <a className='flex justify-around items-center w-full text-gray-200 overflow-hidden md:pr-10 sm:pr-8' href="mailto:rishirajbhardwaj20@gmail.com" target="_blank" rel="noopener noreferrer" id="contact-email">rishirajbhardwaj20@gmail.com<HiOutlineMail size={30}/></a>
            </div>  
            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-600`}>
              <p className='flex justify-around items-center w-full text-gray-200' id="contact-phone">+91 8951014611<BsFillTelephoneFill size={25}/></p>
            </div>    
        </div>
        </div>
    </div>
  )
}

export default Footer