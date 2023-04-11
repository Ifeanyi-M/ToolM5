import React from 'react'
import './howitworks.css'
import Shirts from '../image/shirts.jpg'
import { AiFillRightCircle } from 'react-icons/ai'

const HowitWorks = () => {
  return (
    <section className='howitworks'>
        <div className='container howitworks'>
              <p className='pee'>How it Works?</p>
            <div className='howitworks__cards'>
                  <div className=' howitworks_left'>
                      <img src={Shirts} alt="" className='howitworks_img' />
                      <h2 className='howitworks_htwo'>Unique T-Shirt</h2>
                      <div className='howitworks_links'>
                          <button className='howitworks_button'>Buy for ₦20,500</button>
                          <div className='linqhowitworks'>
                              <a href="" className='howitworks_a'>View all</a>
                              <AiFillRightCircle className='btn__icon' />
                          </div>
                        
                      </div>
                  </div>

                  <div className='howitworks_right'>
                      <p className='pee2'>Unique T-Shirt Design</p>
                      <hr className='line'/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias, aut eaque eligendi, tenetur quaerat quidem necessitatibus vero alias iste labore quas consectetur tempora doloribus. Aspernatur blanditiis est nulla quia nostrum ex, quas inventore, iste nisi, consectetur optio quis cum assumenda impedit id! Consectetur quam tempora quisquam non, rerum laudantium.</p>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem voluptatum adipisci omnis minima consequuntur aperiam hic quasi molestias. Omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, optio!</p>
                      <div className='howitworks_linkstwo'>
                          <button className='howitworks_buttontwo'>Subscription ₦3,500/m</button>
                          <div className='linqhowitworkstwo'>
                              <a href="" className='howitworks_atwo'>More Info</a>
                              <AiFillRightCircle className='btn__icontwo' />
                          </div>
                          
                      </div>
                  </div>

            </div>
            
            
           

        </div>
    </section>
  )
}

export default HowitWorks