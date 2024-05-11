import React from 'react'
import "./navbar.scss"


const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className='wrapper'>
            <span> Awoleye Bolaji S.</span>
            <div className='social'>
                <a href='a'><img src='/facebook.png' alt=''/></a>
                <a href='a'><img src='/instagram.png' alt=''/></a>
                <a href='a'><img src='/youtube.png' alt=''/></a>
                <a href='a'><img src='/dribble.png' alt=''/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar