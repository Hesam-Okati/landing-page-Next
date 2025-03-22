import React from 'react'
import "./TopBoxes.css"

function TopBoxes() {
  return (
    <div className='mt-5 container d-flex align-items-center justify-content-between mb-5'>
        <img src="/assets/images/1-box.png" className='p-4 border'/>
        <img src="/assets/images/2-box.png" className='p-4 border'/>
        <img src="/assets/images/3-box.png" className='p-4 border'/>
        <img src="/assets/images/4-box.png" className='p-4 border'/>
        <img src="/assets/images/5-box.png" className='p-4 border'/>
    </div>
  )
}

export default TopBoxes