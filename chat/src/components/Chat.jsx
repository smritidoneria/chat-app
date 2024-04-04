import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='Chat'>
        <div className="chatInfo">
            <span>Jane</span>
            <div className="chatIcons">
            <box-icon name='camera'></box-icon>
            <box-icon name='image-add' ></box-icon>
            <box-icon name='dots-horizontal-rounded' ></box-icon>

            </div>
           
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat