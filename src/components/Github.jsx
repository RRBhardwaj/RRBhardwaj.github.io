import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
  return (
    <div className='w-full h-150vh bg-[#0a192f] pt-8'>
        <div className='text-3xl text-gray-200 max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full'>
        <div className='mb-14'>
            <p className='text-3xl font-bold border-b-4 border-gray-600 p-2 inline'>My Github Calender</p>
        </div>
          <GitHubCalendar username="rrbhardwaj" className="ml-10"/>
        <div className='bg-[#0a192f] flex flex-col mx-auto max-w-[600px] justify-center items-start'>
            <img className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-streak-stats.herokuapp.com/?user=rrbhardwaj&theme=light&background=FFFFFF" alt="github"/> 
            <img className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-stats.vercel.app/api/top-langs/?username=RRBhardwaj&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="Language"/>  
        </div> 
        </div>
    </div>
  )
}

export default Github
{/* <div className='w-full h-150vh bg-[#0a192f] pt-8'>
        <div className='text-3xl text-gray-200 max-w-screen-lg mx-auto p-4 justify-center flex flex-col w-full h-full'>
        <div className='mb-14'>
            <p className='text-3xl font-bold border-b-4 border-gray-600 p-2 inline'>My Github Calender</p>
        </div>
        <GitHubCalendar username="rrbhardwaj" className="ml-10"/>
        <div className='bg-[#0a192f] flex flex-col max-w-[600px] justify-center items-center'>
            <img className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-streak-stats.herokuapp.com/?user=rrbhardwaj&theme=light&background=FFFFFF" alt="github"/> 
            <img className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-stats.vercel.app/api/top-langs/?username=RRBhardwaj&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="Language"/>  
        </div> 
        </div>
    </div> */}