import React from 'react'
import cam from "../zoom.png"
import add from "../add-user.png"
import more from "../more.png"
import Messages from './Messages'
import Input from "./Input"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>radha</span>
        <div className="chatIcons">
          <img className='img' src={cam} alt="" />
          <img className='img' src={add} alt="" />
          <img className='img' src={more} alt="" />
        </div>
        
      </div>
      <Messages/>
      <Input/>

    </div>
  )
}

export default Chat