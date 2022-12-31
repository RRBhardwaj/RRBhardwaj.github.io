import React,{useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

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
            <h4 className='text-4xl ml-2 font-signature'>RRBhardwaj</h4>
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
            {!nav ? <FaBars size={30} className="text-gray-300"/> : <FaTimes size={30} className="text-gray-300"/>}
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
        
    </div>
  )
}

export default Navbar