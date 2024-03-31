import React from 'react'
import { NavLink, Outlet  } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <h1>Contact Page</h1>
        <button> <NavLink to="contact-us">Call or mail us</NavLink></button>
        <button><NavLink to="address">Drop a Letter</NavLink></button>
        <Outlet/>
    </div>
  )
}

export default Contact