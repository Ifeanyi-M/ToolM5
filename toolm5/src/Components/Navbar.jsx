import React from 'react'
import './navbar.css'
import {AiFillRightCircle} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav>
          <div className='container nav__container'>
            <div>
                  <span>
                      <h2>ToolM5</h2><p>Shirts</p>
                  </span>
            </div>
            
                  <ul>
                      <li>About us</li>
                      <li>Services</li>
                      <li>Contacts</li>

                  </ul>
                  <div className='linkstart'>
                  <a href="" className='navlink'>Get Started </a>
                  <AiFillRightCircle className='btn__icon' />
                  </div>
                  
                  
                  
                  
                 

            
            
            
          </div>
          
    </nav>
   
  )
}

export default Navbar