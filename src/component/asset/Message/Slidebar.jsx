import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
const Slidebar = () => {
return (
    <div className='slidebar'>
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
)
}

export default Slidebar