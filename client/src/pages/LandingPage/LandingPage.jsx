import React from 'react'
import Gallery from './Gallery'
import WholeAbouts from './WholeAbouts'
import WholeIntro from './WholeIntro'

function LandingPage() {


  return (
    <div className='WholeIntro'>
    <WholeIntro/>
    <WholeAbouts/>
    <Gallery/>
    </div>
  )
}

export default LandingPage
