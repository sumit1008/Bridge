import React from 'react'

const Navbar = () => {
return (
    <div className='navbar'>
        <span className='logo'>Message</span>
        <div className='user'>
            <img className='image' src="https://3.bp.blogspot.com/-522I7mfmAQQ/U9h1iNwZcvI/AAAAAAABusM/q9NJolhINh8/s1600/Khushi+Latest+Stills+(46).jpg" alt="" />
            <span>Khushi</span>
            <button className='button'>logOut</button>
        </div>
    </div>
)
}

export default Navbar