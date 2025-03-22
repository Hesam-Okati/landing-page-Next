import TopBar from '@/Components/TopBar/TopBar'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '@/Components/Header/Header'

function page() {
  return (
    <div>
      <div className='bgc-dark'>
      <TopBar />
      <Header />
      </div>
    </div>
  )
}

export default page