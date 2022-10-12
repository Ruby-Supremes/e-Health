import React from 'react'
import Button from '../../components/Button'
import * as Io from "react-icons/io";
function WholeAbouts() {
  return (
    <div className='about-grid'>
      <div>
      <h3>About Us</h3>
      <Io.IoIosArrowRoundForward className='radious'/>
      </div>
      <div className="about">
        <div>
        <h1>Medwin care clinic.</h1>
        <p>The Medwin care clinic is one of the 5 top level clinic of the World Union</p>
        <Button classN={'btn2'} word={'Learn More'}/>
        </div>
        <h5>Surgical operations of any complexity at a fixed price</h5>
      </div>
      <div>
        <img src="https://st.depositphotos.com/1006832/4057/i/450/depositphotos_40571515-stock-photo-interior-of-modern-building.jpg" alt="" />
        <ol className='equipment-grid'>
            <li>Hello</li>
        </ol>
      </div>

    </div>
  )
}

export default WholeAbouts
