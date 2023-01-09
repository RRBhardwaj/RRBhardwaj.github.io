import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-50vh bg-[#0a192f] text-white pt-4 pb-24'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-  center w-full h-full'>
            <div className='pb-8'>
                <p className='text-2xl font-bold inline border-b-4 border-gray-300 pt-5'>About Me</p>
            </div>
            <p className='text-md mt-5 text-green-300'>
                My name is Rishi Raj Bhardwaj. I am a Front End Web Developer  
            </p>
            <br/>
            <p className='text-md'>
                I have experience in effective collaboration and a keen interest in solving problems and coming up with effective solutions. With a good understanding of Data Structure and Algorithms, and a stronghold on the MERN stack. I am looking forward to starting my journey with a strong focus on building great products within the role of a Full Stack Web Developer.
            </p>
        </div> 
    </div>
  )
}

export default About;