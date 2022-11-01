import React from 'react';
import './ListingItem.css';
import { NavLink } from 'react-router-dom';

export default function ListingItem() {
  return (
    <div>
      <NavLink to={'/detail'}>
      <div className='listing-item'>
        <img className='listing-image' alt='' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div className='listing-details'>
            <div className='listing-categories'>
                <span className='listing-category'>Buy</span>
                <span className='listing-category'>Sell</span>
            </div>
            <span className='listing-title'>Awesome Property</span>
            <hr />
            <span className='listing-time'>3 days ago</span>
        </div>
        <p className='listing-description'>Lorem ipsum dolor sit amet consectetur elit. Eveniet amet quidem repellat fugit obcaecati architecto dicta Lorem ipsum dolor sit amet consectetur elit. Eveniet amet quidem repellat fugit obcaecati architecto dicta asperiores! Similique ea laboriosam accusantium? Deleniti, velit, delectus temporibus enim cum sit molestias deserunt laborum autem recusandae, at inventore? In eaque saepe illo ea a doloribus veritatis, veniam accusamus? Deleniti cum officia voluptatibus qui? asperiores! Similique ea laboriosam accusantium?</p>
    </div>
      </NavLink>
    </div>
  )
}
