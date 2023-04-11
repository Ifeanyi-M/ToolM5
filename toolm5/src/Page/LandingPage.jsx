import React from 'react'
import './landingpage.css'
import Navbar from '../Components/Navbar'
import MainHeader from '../Components/MainHeader'
import HowitWorks from '../Components/HowitWorks'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        
        <MainHeader/>
        <hr/>
        <HowitWorks/>
    </div>
  )
}

export default LandingPage