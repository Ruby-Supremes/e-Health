import React from 'react'
import Footer from './Footer'
import Gallery from './Gallery'
import WholeAbouts from './WholeAbouts'
import WholeIntro from './WholeIntro'

function LandingPage() {


  return (
    <div className='WholeIntro'>
    <WholeIntro/>
    <WholeAbouts/>
    <Gallery/>
    <Footer/>
    </div>
  )
}

export default LandingPage
