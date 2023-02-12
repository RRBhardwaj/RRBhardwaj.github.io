import React from 'react'; 

import html from "../assests/html.png";
import css from "../assests/css.png";
import js from "../assests/javascript.png";
import mongo from "../assests/mongo.png";
import node from "../assests/node.png";
import reactImage from "../assests/react.png";
import redux from "../assests/redux.png";
import github from "../assests/github.png";
import bootstrap from "../assests/bootstrap2.png";

const Skills = () => {
    const techs = [
        {
            id:1,
            src:html,
            title:"HTML",
            style: "shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style: "shadow-blue-600"
        },
        {
            id:3,
            src:js,
            title:"JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style: "shadow-blue-400"
        },
        {
            id:5,
            src:redux,
            title:"Redux",
            style: "shadow-purple-400"
        },
        {
            id:6,
            src:node,
            title:"Node",
            style: "shadow-green-400"
        },
        {
            id:7,
            src:mongo,
            title:"Mongo",
            style: "shadow-green-600"
        },
        {
            id:8,
            src:github,
            title:"Github",
            style: "shadow-gray-400"
        },
        {
            id:9,
            src:bootstrap,
            title:"Bootstrap",
            style: "shadow-purple-800"
        },
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-[#0e2445] to-[#0f2648] w-full h-150vh pt-24'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-3xl font-bold border-b-4 border-gray-400 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technology I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title,style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div> 
        </div>       
    </div>
  )
}

export default Skills