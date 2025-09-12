import React from 'react'
import video from "../../../public/banner.mp4"

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover'autoPlay loop muted src={video}></video>
    </div>
  )
}

export default Video
