import React from 'react';

const Contacts = () => {
  return (
    <div name='contact' className='w-full max-h-screen text-white p-4 bg-gradient-to-b from-[#122c54] to-[#14315a] pt-16 pb-8 object-contain'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-fit'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
        </div>
      </div>
       <div className='flex justify-center items-center'>
        <form method='POST' action="https://getform.io/f/ab54af18-74b5-4476-b2cc-3a71e6bc6b8a" className='flex flex-col w-full md:w-1/2 text-black'>
              <input className='bg-white p-2 rounded-lg' type="text" placeholder='Name' name='name' required/>
              <input className='my-4 p-2 bg-white rounded-lg' type="email" placeholder='Email' name='email' required/>
              <textarea className='bg-white text-black p-2 rounded-xl resize-none' name="message" rows="12" placeholder='Message' required></textarea>
              <button className='text-white border-2 hover:bg-sky-700 hover:border-sky-800 px-4 py-3 mt-4 mb-2 mx-auto flex items-center rounded-2xl'>Send Message</button>
          </form>
       </div>
    </div>
  )
}

export default Contacts;
