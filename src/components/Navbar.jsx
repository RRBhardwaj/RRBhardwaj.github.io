import React,{useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
    
    const handleResume = () => {
        window.open('https://drive.google.com/file/d/1jFPUwmPU2j21g5YDqNi74oJauCHcLfIE/view?usp=sharing', '_blank');
        const link = document.createElement('a');
        link.download = 'Rishi_Bhardwaj_Resume.pdf';
        document.body.appendChild(link);
        link.click();
      }
    const links = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"skills"
        },
        {
            id:4,
            link:"projects"
        },
        {
            id:5,
            link:"contact"
        }
    ] 
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 py-4 text-gray-300 bg-gradient-to-b from-[#000000] to-[#142949] z-100'>
        <div>
            <h4 className='text-4xl ml-2 font-signature cursor-none'>RRBhardwaj</h4>
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
            {
                links.map(({id,link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))
            }
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'>
                <a href='Rishi_Bhardwaj_Resume.pdf' target="_blank" download={true} rel="noreferrer" onClick={handleResume}>Resume</a>
            </li>
        </ul>
        
        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 pr-4 cursor-pointer text-gray-200">
            {!nav ? <FaBars size={30} className="text-gray-300"/> : <FaTimes size={30} className="text-gray-300"/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000000] to-[#1b365e] flex flex-col justify-center items-center"}>
            {
                links.map(({id,link}) => (
                    <li key={id} className='"px-4 py-6 text-4xl capitalize cursor-pointer'>
                        <Link onClick={()=>handleClick()} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))
            }
        </ul>   
    </div>
  )
}

export default Navbar