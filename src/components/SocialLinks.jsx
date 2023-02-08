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
        window.location.href = 'mailto:rishirajbhardwaj20@example.com';
      };
  return (
    <div className='hidden xl:flex fixed flex-col top-[38%] left-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="https://linkedin.com" target="_blank" rel="noreferrer">Linkedin<FaLinkedin size={25}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171616]'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="https://github.com/RRBhardwaj" target="_blank" rel="noreferrer">Github<FaGithub size={25}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#68bba9]'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="mailto:rishirajbhardwaj20@gmail.com" target="_blank" rel="noopener noreferrer" onClick={handleMail}>Email<HiOutlineMail size={25}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2f3133]'>
                    <a className='flex justify-between items-center w-full text-gray-200' href="/Rishi_Bhardwaj_Resume.pdf" target="_blank" rel="noreferrer" download={true} onClick={handleClick}>Resume<BsFillPersonLinesFill size={25}/></a>
                </li>
            </ul>
        </div>
  )
}

export default SocialLinks