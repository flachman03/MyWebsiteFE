import React from 'react'
import './Navigation.scss'

const Navigation = () => {
  return(
    <nav className='navbar__main'>
      <div className='navbar__container'>
        <button className='nav-btn'>Home</button>
        <button className='nav-btn'>About</button>
        <button className='nav-btn'>Portfolio</button>
        <button className='nav-btn'>Skills</button>
        <button className='nav-btn'>Contact</button>
      </div>
    </nav>
  )
};

export default Navigation;