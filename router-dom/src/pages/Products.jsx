import { Link, Outlet } from 'react-router-dom';
import React from 'react'
const change ={
   marginRight:"20px",
}

function Products() {
  return (
    <div>
        <Link to="123" style={change} >Product - 123</Link>
        <Link to="456" style={change}>Product - 456</Link>
        <Link to="726" style={change}>Product - 726</Link>
        
        <Outlet/>
    </div>
  )
}

export default Products