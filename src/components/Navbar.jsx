import React,{useState} from 'react';
import {FaBars, FaTimes, FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
    const links = [
        {
            id:1,
            link:"Home"
        },
        {
            id:2,
            link:"About"
        },
        {
            id:3,
            link:"Skills"
        },
        {
            id:4,
            link:"Projects"
        },
        {
            id:5,
            link:"Contact"
        }
    ]
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h4 className='py-6 text-2xl ml-[10px] font-signature'>RRBhardwaj</h4>
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
            {
                links.map(({id,link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200'>{link}</li>
                ))
            }
        </ul>
        
        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 pr-4 cursor-pointer text-gray-200">
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            {
                links.map(({id,link}) => (
                    <li key={id} className='"px-4 py-6 text-4xl capitalize cursor-pointer'>{link}</li>
                ))
            }
        </ul>


        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Linkedin<FaLinkedin size={30}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171616]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Github<FaGithub size={30}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53ac99]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Email<HiOutlineMail size={30}/></a>
                </li>
            </ul>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2f3133]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume<BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar