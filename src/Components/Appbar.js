import React from 'react'

const Appbar = () => {
  return (
   <nav mt-5>
    <div className=' flex justify-between  max-w-7xl mx-auto'>
    <div>
    <span className='text-green-500 font-bold text-4xl'>Hackdesk</span>
    <span className='text-neutral-500 font-thin text-3xl' >Technologies</span>
    </div>
    <div>
        <ol className=' flex space-x-8 '>
            <li className='text-slate-500 hover:bg-green-500 px-4 py-2 rounded-full hover:text-white transform ease-in-out duration-1000'><a href='' className='font-body font-bold'>Home</a></li>
            <li className='text-slate-500 hover:bg-green-500 px-4 py-2 rounded-full hover:text-white'><a href='' className='font-body font-bold'>Services</a></li>
            <li className='text-slate-500 hover:bg-green-500 px-4 py-2 rounded-full hover:text-white'><a href='' className='font-body font-bold'>Learing Path</a></li>
            <li className='text-slate-500 hover:bg-green-500 px-4 py-2 rounded-full hover:text-white'><a href='' className='font-body font-bold'>Support</a></li>
        </ol>
    </div>

    </div>
   
   
   </nav>
  )
}

export default Appbar
    
