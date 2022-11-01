import React from 'react';
import './CreateListing.css'

export default function CreateListing() {
  return (
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
                <input className='create-listing-title' autoFocus={true} type='text' placeholder='Property Title'/>
                <label className='create-listing-image-upload' htmlFor='listingImage'>
                   <i className="upload-icon fa-solid fa-upload"></i>
                </label>
                <input type='file' id='listingImage' style={{display:'none'}} />
            </div>
            <div className='create-listing-form-group'>
                <textarea className='create-listing-title create-listing-description' placeholder='Property Description'></textarea>
            </div>
        </form>
        <button className='create-listing-button'>Submit</button>
    </div>
  )
}
