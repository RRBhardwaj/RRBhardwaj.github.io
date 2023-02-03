import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1YMvMriZc_m7JEJlgowI7bQgbKZWYEDL7/view?usp=share_link', '_blank');
        const link = document.createElement('a');
        link.download = 'Rishi_Bhardwaj_Resume.pdf';
        document.body.appendChild(link);
        link.click();
    }
    const handleMail = () => {
        window.location.href = 'mailto:someone@example.com';
      };
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://linkedin.com" target="_blank" rel="noreferrer">Linkedin<FaLinkedin size={30}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171616]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/RRBhardwaj" target="_blank" rel="noreferrer">Github<FaGithub size={30}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53ac99]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:rishirajbhardwaj20@gmail.com" target="_blank" rel="noreferrer" onClick={handleMail}>Email<HiOutlineMail size={30}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2f3133]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/Rishi_Bhardwaj_Resume.pdf" target="_blank" rel="noreferrer" download={true} onClick={handleClick}>Resume<BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
  )
}

export default SocialLinks