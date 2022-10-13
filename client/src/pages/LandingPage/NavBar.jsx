import React from 'react'
// import {Link} from 'react-router-dom'
// import logo from './../../../public/images/logo.svg'
function NavBar() {
    const navData=[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Us",
            path: "/Abouts"
        },
        {
            title: "Speciaists",
            path: "/specialist"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Doctors",
            path: "/doctors"
        },
        {
            title: "Price",
            path: "/prices"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]
    // const linky=()=>{
    //     navData.map(item=>{
    //         return (<li className="navLink"><Link to={item.path} element={''}>{item.title}</Link></li>)})
    // }
  return (
    <div className='Nav'>
      <div className="logo">
        <img src="https://st4.depositphotos.com/37205996/39536/v/1600/depositphotos_395363894-stock-illustration-medical-cross-orthopaedic-vector-template.jpg" alt="" />
      </div>
      <ul className="navMenu">
        
        {
           navData.map(item=>(
            <li>
               {item.title}
            </li>
           ))
        }
      </ul>
      <div className='navInfo'>
        <button>ENG</button>
        <button>(+254) 700-000-022</button>
      </div>
    </div>
  )
}

export default NavBar
