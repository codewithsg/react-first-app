import React from 'react';
import './ListingDetail.css';

export default function ListingDetail() {
  return (
    <div className='listing-detail'>
        <div className='listing-detail-content'>
            <img className='listing-detail-image' alt='' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <h2 className='listing-detail-title'>
                Awesome Property
                <div className='listing-detail-action'>
                    <i className="listing-detail-action-icon fa-solid fa-pencil"></i>
                    <i className="listing-detail-action-icon fa-solid fa-trash-can"></i>
                </div>
            </h2>
            <div className='listing-detail-meta-info'>
                <span className='listing-detail-author'>Author - <strong>John Doe</strong></span>
                <span className='listing-detail-meta-info-date'>3 days ago</span>
            </div>
            <p className='listing-detail-description'>
            Lorem ipsum dolor sit amet consectetur elit. Eveniet amet quidem repellat fugit obcaecati architecto dicta Lorem ipsum dolor sit amet consectetur elit. Eveniet amet quidem repellat fugit obcaecati architecto dicta asperiores! Similique ea laboriosam accusantium? Deleniti, velit, delectus temporibus enim cum sit molestias deserunt laborum autem recusandae, at inventore? In eaque saepe illo ea a doloribus veritatis, veniam accusamus? Deleniti cum officia voluptatibus qui? asperiores! Similique ea laboriosam accusantium?
            </p>
        </div>
    </div>
  )
}
