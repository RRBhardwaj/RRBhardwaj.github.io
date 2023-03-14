import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
  return (
    <div className='w-full h-full py-8 bg-gradient-to-b from-[#112a4f] to-[#122c54]'>
        <div className='text-3xl text-gray-200 max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full'>
        <div className='mb-14'>
            <p className='text-3xl font-bold border-b-4 border-gray-400 p-2 inline'>My Github Calender</p>
        </div>
          <GitHubCalendar username="rrbhardwaj" className="ml-10"/>
        <div className='flex flex-col mx-auto max-w-[600px] justify-center items-start'>
            <img id="github-streak-stats" className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-streak-stats.herokuapp.com/?user=rrbhardwaj&theme=light&background=FFFFFF" alt="github"/> 
            <img id="github-top-langs" className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-stats.vercel.app/api/top-langs/?username=RRBhardwaj&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="Language"/>  
            <img id="github-stats-card" className='text-gray-600 mr-6 my-5 w-full rounded-sm' src="https://github-readme-stats.vercel.app/api?username=RRBhardwaj&theme=light&hide_border=false&include_all_commits=true&count_private=true" alt="Language"/>  
        </div> 
        </div>
    </div>
  )
}

export default Github;