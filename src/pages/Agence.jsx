import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg',
    'https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/SebR_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        onUpdate:function(element){
        
        let imageIndex;
        if(element.progress<1){
          imageIndex = Math.floor(element.progress * imageArray.length)
        }else{
          imageIndex = imageArray.length-1
        }
        imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='h-[20vw]  overflow-hidden rounded-3xl w-[15vw] absolute top-40 left-[30vw] bg-red-500'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[18vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />
              TW0</h1>
          </div>
          <div className='pl-[50%] mt-20'>
            <p className='text-3xl w-3/4'>&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>
        {/* <div className='h-[20vw]  overflow-hidden rounded-3xl w-[15vw] absolute top-40 left-[30vw] bg-red-500'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[18vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />
              TW0</h1>
          </div>
          <div className='pl-[50%] bg-red-500 mt-20'>
            <p className='text-3xl w-3/4'>&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div> */}
      </div>

    </div>
  )

}

export default Agence
