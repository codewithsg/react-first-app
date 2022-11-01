import React from 'react';
import './TopBar.css';
import {NavLink} from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='top-bar'>
      <div className='social-media top-bar-left'>
        <i className="social-media fa-brands fa-instagram"></i>
        <i className="social-media fa-brands fa-facebook-f"></i>
        <i className="social-media fa-brands fa-twitter"></i>
      </div>
      <div className='top-bar-center'>
          <ul className='list'>
            <li className='list-item'>
              <NavLink to={'/'}>HOME</NavLink>
            </li>
            <li className='list-item'>ABOUT</li>
            {/* <li className='list-item'>CONTACT US</li> */}
            <li className='list-item'>
              <NavLink to={'/create'}>CREATE PROPERTY</NavLink>  
            </li>
            <li className='list-item'>LOGOUT</li>
          </ul>
      </div>
      <div className='top-bar-right'>
        <img alt='image1' className='profile-picture' src='https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <i className="search fa-solid fa-magnifying-glass"></i>
      </div>
      </div>
  )
}
