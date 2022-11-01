import React from 'react';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar-section'>
        <div className='sub-section'>
          <span className='sidebar-title'>About Me</span>
          <img className='sidebar-image' alt='' src='https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <p>
            Lorem ipsum dolor sit amet consectetur  elit. Eveniet amet quidem repellat fugit obcaecati architecto dicta asperiores! Similique ea laboriosam accusantium? Deleniti, velit, delectus temporibus enim cum sit molestias deserunt laborum autem recusandae, at inventore? In eaque saepe illo ea a doloribus veritatis, veniam accusamus? Deleniti cum officia voluptatibus qui?
          </p>
        </div> 
        <div className='sub-section'>
          <span className='sidebar-title'>Categories</span>
          <ul className='sidebar-categories'>
            <li className='sidebar-category'>Buy</li>
            <li className='sidebar-category'>Sell</li>
            <li className='sidebar-category'>Rent</li>
            <li className='sidebar-category'>Hostel</li>
            <li className='sidebar-category'>B & B</li>
            <li className='sidebar-category'>Hotel</li>
          </ul>
        </div>
        <div className='sub-section'>
          <span className='sidebar-title'>Follow Me</span>
          <div className='sidebar-social-icons'>
            <i className="social-icon fa-brands fa-instagram"></i>
            <i className="social-icon fa-brands fa-facebook-f"></i>
            <i className="social-icon fa-brands fa-twitter"></i>
          </div>
        </div>
    </div>
  )
}
