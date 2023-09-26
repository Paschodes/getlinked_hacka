import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <h1 className='nav_h1'>get<span>linked</span></h1>
                
        <div className='nav_right'>
            <div className='nav_links'>
                <a href="">Timeline</a>
                <a href="">Overview</a>
                <a href="">FAQs</a>
                <a href="">Contact</a>
            </div>
            <button className='nav_btn'>Register</button>
        </div>
    </nav>
  )
}
;
export default Navbar