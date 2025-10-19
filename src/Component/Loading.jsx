import React from 'react'

import { assets } from "../assets/assets.js";
const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-20 h-20 border-4 border-gray-300 border-t-4 border-blue-500 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
