import React from 'react'
import File from "../upload.png"
import Icon from "../image-.png"

const Input = () => {
  return (
    <div className="Input">
      <input className='inp' type="text" placeholder='Type something'/>
      <div className="chatting">
      <img className='image' src={File} alt="" />
      <img className='image' src={Icon} alt="" />
      <button className='button'>Send</button>
      </div>

      
      
    </div>
    
  )
}

export default Input