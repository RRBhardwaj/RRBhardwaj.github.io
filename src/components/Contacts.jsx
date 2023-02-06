import React from 'react';

const Contacts = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ab54af18-74b5-4476-b2cc-3a71e6bc6b8a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600 text-white'>Contact</p>
            </div>
            <input className='bg-white p-2 rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2 rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-sky-700 hover:border-sky-800 px-4 py-3 my-8 mx-auto flex items-center rounded-2xl'>Send Message</button>
        </form>
    </div>
  )
}

export default Contacts