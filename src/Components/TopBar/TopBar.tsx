import React from 'react'
import "./TopBar.css"

function TopBar() {
  return (
    <div className='py-4  t-4 d-flex align-items-center justify-content-around bgc-dark'>
        <button className='text-white btn btn-perple text-white'>شروع کار رایگان</button>
        <button className='text-white btn'>تماس با ما </button>
        <button className='text-white btn'>وبلاگ</button>
        <button className='text-white btn'>امکانات</button>
        <button className='text-white btn'>خدمات</button>
        <button className='text-white btn'>قیمت گذاری</button>
        <button className='text-white btn'>درباره ما </button>
        <button className='text-white btn'>خانه</button>
        <img src="/assets/images/logo.png"/>

    </div>
  )
}

export default TopBar