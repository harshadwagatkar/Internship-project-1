import { Brain } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-violet-500 via-indigo to-violet-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-10 flex justify-between'>
        <div className='w-full p-4 flex items-center gap-4'> 
            <span className='bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center'>
                <Brain size={20}/>
            </span>
            <div>
                <h1 className='text-xl font-bold'>ViJeera HR</h1>
                <p className='text-xs text-gray-700'>PROFESSIONAL HR ACADEMY</p>
            </div>
        </div>

        <p className='w-fit'>&copy; 2026 ViJeera HR. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
