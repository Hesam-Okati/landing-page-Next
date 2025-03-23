import TopBar from '@/Components/TopBar/TopBar'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '@/Components/Header/Header'
import TopBoxes from '@/Components/TopBoxes/TopBoxes'
import QuoteBar from '@/Components/QuoteBar/QuoteBar'
import Benefits from '@/Components/Benefits/Benefits'
import About from '@/Components/About/About'
import Footer from '@/Components/Footer/Footer'

function page() {
  return (
    <div>
      <div className='bgc-dark'>
      <TopBar />
      <Header />
      </div>

      <TopBoxes />
      <QuoteBar />


      <div className='bg-gray'>
      <Benefits />
      <About />
      </div>

    <div className="bgc-dark">
      <Footer />
    </div>

    </div>
  )
}

export default page