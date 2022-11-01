import React from 'react';
import Header from '../../components/header/Header';
import Listing from '../../components/listing/Listing';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';

export default function Home() {
  return (
    <div>
        <Header />
        <div className='home-page'>
          <Listing />
          <Sidebar />
        </div>
    </div>
  )
}
