import React from 'react'
import './mainheader.css'

const MainHeader = () => {
  return (
    <header className='main_header'>
        <div className="container main__header-container">
            <p className='mainheader_p'>Create Your</p>
            <h1 className='mainheader_h'>T-Shirt Design</h1>
            <button className='btn_mainheader'>Get Started</button>
            <div className='mainheader_link'>
                  <a href="">View how it works</a>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi.</p>
            
        </div>
    </header>
  )
}

export default MainHeader