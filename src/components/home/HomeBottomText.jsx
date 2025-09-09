import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[4.5vw] leading-[5vw] border-2 border-white rounded-full px-10 pt-4 uppercase'>Projects</Link>
      <Link className='text-[4.5vw] leading-[5vw] border-2 border-white rounded-full px-10 pt-4 uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
