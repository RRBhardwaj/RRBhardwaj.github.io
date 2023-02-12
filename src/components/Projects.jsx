import React from 'react';
// import { data } from "../data/data.js";
import Indiwebmall from "../assests/Indiweb_Mall.png";
import Mytheresa from "../assests/Mytheresa_Attic.png";
import IndianExpress from "../assests/Indian_Express.png";
import html from "../assests/html.png";
import css from "../assests/css.png";
import js from "../assests/javascript.png";
import reactImage from "../assests/react.png";
import bootstrap from "../assests/bootstrap2.png";
import chakra from "../assests/chakra.png";
import bluefly from "../assests/bluefly.png";

const Projects = () => {
  const techs = [
    {
        id:1,
        src:html,
        style: "shadow-orange-500"
    },
    {
        id:2,
        src:css,
        style: "shadow-blue-600"
    },
    {
        id:3,
        src:js,
        style: "shadow-yellow-500"
    },
    {
        id:4,
        src:reactImage,
        style: "shadow-blue-400"
    }
]
const techi = [
  {
      id:1,
      src:html,
      style: "shadow-orange-500"
  },
  {
      id:2,
      src:css,
      style: "shadow-blue-600"
  },
  {
      id:3,
      src:js,
      style: "shadow-yellow-500"
  },
  {
      id:4,
      src:reactImage,
      style: "shadow-blue-400"
  },
  {
    id:5,
    src:chakra,
    style: "shadow-teal-300"
  }
]
const tech = [
  {
      id:1,
      src:html,
      style: "shadow-orange-500"
  },
  {
      id:2,
      src:css,
      style: "shadow-blue-600"
  },
  {
      id:3,
      src:js,
      style: "shadow-yellow-500"
  }
]
const techold = [
  {
      id:1,
      src:html,
      style: "shadow-orange-500"
  },
  {
      id:2,
      src:css,
      style: "shadow-blue-600"
  },
  {
      id:3,
      src:js,
      style: "shadow-yellow-500"
  },
  {
    id:4,
    src:bootstrap,
    style: "shadow-purple-400"
}
]
return (
    <div name='projects' className='w-full h-150vh  text-white bg-gradient-to-b from-[#0f2648] to-[#112a4f] py-14'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
          <p className='py-4'>Check out some of my recent projects</p>
        </div>
          <div className="grid grid-cols-1 gap-8 px-2 py-6 sm:px-0">
            <div className='shadow-gray-600 rounded-lg'>
              <img src={Indiwebmall} alt="Project" className='rounded-md duration-200 hover:scale-105'/>
              <p className='py-2 text-green-300 pt-4 text-center'>IndiWebmall is ecommerce website where we can buy different categories of products and also we can buy coupons to shop other products and gift them to others.</p>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-4 px-4 sm:px-4 gap-4'>
              {
                techs?.map(({id,src,style}) => (
                    <div key={id} className={`shadow-md shodow-gray-600 hover:scale-105 duration-500 py-1 w-2/5 rounded-lg ${style} mx-10`}>
                        <img src={src} alt="images" className='w-6 mx-auto'/>
                    </div>
                ))
              }
              </div>
              <div className='flex items-center justify-center'>
                <a className='group text-white w-fit px-4 py-3 mx-4 my-3 rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://indiwebmall-nine.vercel.app/' target="_blank" rel="noreferrer">Demo</a>
                <a className='group text-white w-fit px-6 py-3 mx-4 my-3  rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://github.com/RRBhardwaj/paytm-mall-clone' target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
            <div className='shadow-gray-600 rounded-lg pb-3'>
              <img src={Mytheresa} alt="Project" className='rounded-md duration-200 hover:scale-105'/>
              <p className='py-2 text-green-300 pt-4 text-center'>It is an E-commerce luxury fashion company which offers different kind of products for men, women and children.</p>
              <div className='w-full grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 text-center py-4 px-10 gap-4'>
              {
                  techi?.map(({id,src,style}) => (
                      <div key={id} className={`shadow-md shodow-gray-600 hover:scale-105 duration-500 py-1 w-2/5 rounded-lg ${style} mx-10`}>
                          <img src={src} alt="images" className='w-6 mx-auto'/>
                      </div>
                  ))
              }
              </div>
              <div className='flex items-center justify-center pb-3'>
                <a className='group text-white w-fit px-4 py-3 mx-4 my-3 rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://mytheresa-attic.netlify.app/' target="_blank" rel="noreferrer">Demo</a>
                <a className='group text-white w-fit px-6 py-3 mx-4 my-3  rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://github.com/RRBhardwaj/mytheresa-attic-clone/tree/main/mytheresa-attic' target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
            <div className='shadow-gray-600 rounded-lg'>
              <img src={IndianExpress} alt="Project" className='rounded-md duration-200 hover:scale-105'/>
              <p className='py-2 text-green-300 pt-4 text-center'>It is a News website where you can read daily news about technology, entertainment and many more.</p>
              <div className='w-full grid grid-cols-3 text-center py-4 px-4 gap-4'>
              {
                  tech.map(({id,src,style}) => (
                      <div key={id} className={`shadow-md shodow-gray-600 hover:scale-105 duration-500 py-2 w-2/5 rounded-lg ${style} mx-10`}>
                          <img src={src} alt="images" className='w-6 mx-auto'/>
                      </div>
                  ))
              }
              </div>
              <div className='flex items-center justify-center pb-3'>
                <a className='group text-white w-fit px-4 py-3 mx-4 my-3 rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://chic-melomakarona-8da667.netlify.app/' target="_blank" rel="noreferrer">Demo</a>
                <a className='group text-white w-fit px-6 py-3 mx-4 my-3  rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://github.com/RRBhardwaj/Indian_Express' target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
            <div className='shadow-gray-600 rounded-lg'>
              <img src={bluefly} alt="Project" className='rounded-md duration-200 hover:scale-105'/>
              <p className='py-2 text-green-300 pt-4 text-center'>It is an E-commerce website which offers online marketplace of designer brands and fashion trends. The Company offers apparel, shoes, and accessories. It also offers watches jewelry and beauty products.</p>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-4 px-4 sm:px-4 gap-4'>
              {
                techold?.map(({id,src,style}) => (
                    <div key={id} className={`shadow-md shodow-gray-600 hover:scale-105 duration-500 py-1 w-2/5 rounded-lg ${style} mx-10`}>
                        <img src={src} alt="images" className='w-6 mx-auto'/>
                    </div>
                ))
              }
              </div>
              <div className='flex items-center justify-center pb-6'>
                <a className='group text-white w-fit px-4 py-3 mx-4 my-3 rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://blue-fly-replica.netlify.app/' target="_blank" rel="noreferrer">Demo</a>
                <a className='group text-white w-fit px-6 py-3 mx-4 my-3  rounded-md bg-gradient-to-r from-cyan-800 to to-blue-900 cursor-pointer' href='https://github.com/RRBhardwaj/blue-fly-replica' target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div> 
      </div>
    </div>
  );
};

export default Projects;