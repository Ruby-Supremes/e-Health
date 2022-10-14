import React from 'react'
import NavBar from './NavBar'
import { Link,useNavigate } from 'react-router-dom'
function WholeIntro() {
  return (
    <>
    <NavBar/>
     <div className='motto'>
        <h1>Over a long period of work we have provided hundreds of thousands of health care services</h1>
        <div className="facts">
          <h2>Facts</h2>
          <div className="two-col">
            <p>
              Premium equipment that meets the state-of-the-art in the clinical market
            </p>
            <p>
              Professionals in their field, who can be trusted and get the best results
            </p>
          </div>
          <div className="appointment">
            <h3>Take the sicount for the visit of a doctor</h3>
            <div className="appoint-btn">
              <span>20%</span>
              <button className='btn'><Link className="book" to="/booking">Make an appointment</Link></button>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default WholeIntro
