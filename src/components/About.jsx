import React from 'react';

const About = () => {
  return (
    <div id="about" name="about" className='w-full h-max text-white pt-20 pb-24 bg-gradient-to-b from-[#0c1f3c] to-[#0e2445] about section'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400 pt-5'>About Me</p>
            </div>
            <p className='text-xl mt-5 text-green-300'>
                My name is Rishi Raj Bhardwaj. I am a Full Stack Web Developer  
            </p>
            <br/>
            <p className='text-xl leading-loose' id="user-detail-intro">
                I possess a solid foundation in data structures and algorithms and hands-on experience with the MERN stack. With this skill set, I am driven to create impactful, scalable products as a Full Stack Web Developer.<br></br><br></br>

                My expertise includes HTML, CSS, JavaScript, React, Redux, Angular, Express, and Node.js. I have built responsive interfaces using libraries like Chakra UI and Bootstrap, focusing on performance and user experience. I am also proficient in working with databases like MongoDB and PostgreSQL.<br></br><br></br>

                As a team player, I have independently delivered full-scale applications while collaborating across teams. Passionate about clean architecture and practical problem-solving, I strive to deliver high-quality outcomes as a Full Stack Web Developer.
            </p>
        </div>  
    </div>
  )
}

export default About;