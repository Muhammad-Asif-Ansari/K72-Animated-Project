import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {
  // const stairParentRef = useRef(null)

  // useGSAP(function () {
  //   const tl = gsap.timeline()
  //   tl.to(stairParentRef.current, {
  //     display: 'block'
  //   })
  //   tl.from('.stair', {
  //     height: 0,
  //     stagger: {
  //       amount: -0.25
  //     }
  //   })
  //       tl.to('.stair', {
  //         y:"100%",
  //         stagger: {
  //           amount: -0.25
  //         }
  //       })
  //    tl.to(stairParentRef.current, {
  //     display: 'none'
  //   })
  //   tl.to('.stair', {
  //     y: '0%'
  //   })
   
  // })
  return (
    <div className='text-[#fff]'>
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
