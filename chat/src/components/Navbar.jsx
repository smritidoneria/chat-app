import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo_nav">Chat</span>
        <div className='user'>
            <span>Smriti</span>
            <button className='nav_button'>logout</button>
        </div>
    </div>
  )
}

export default Navbar