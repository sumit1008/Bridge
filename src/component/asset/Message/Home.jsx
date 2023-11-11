import React from 'react'
import Slidebar from './Slidebar'
import Chat from './Chat'
import './Homecss.css';
const Home = () => {
return (
    
    <div className='home'>
        <div className='container'>
        <Slidebar/>
        <Chat/>
        </div>
    </div>
)
}

export default Home