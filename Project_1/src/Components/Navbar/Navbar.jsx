import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Programs'>Programs</NavLink>
        </li>
        <li>
          <NavLink to='/aabout'>About</NavLink></li>
        <li>
          <NavLink to='/Signup'>Signup</NavLink>

        </li>
        
        <li> 
          <NavLink to='/Contact'><button className='btn'>Contact us</button> </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar
