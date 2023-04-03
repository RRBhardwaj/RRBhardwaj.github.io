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
                I possess a strong understanding of data structures and algorithms and am proficient in the MERN stack. With this skill set, I am eager to embark on a journey toward building outstanding products as a Full Stack Web Developer.<br></br><br></br>

                My expertise includes HTML, CSS, JavaScript, React, Redux, Express, Node.js, and I have experience leveraging libraries such as Chakra UI and Bootstrap to develop user interfaces that enhance the user experience. Additionally, I am adept in database management using MongoDB.<br></br><br></br>

                As a team player, I have a proven track record of effective collaboration with colleagues, and I am passionate about problem-solving and generating effective solutions. With my combination of technical and interpersonal skills, I am confident in my ability to deliver exceptional results as a Full Stack Web Developer.
            </p>
        </div>  
    </div>
  )
}

export default About;