import React, { useContext } from 'react'
import Cam from '../assests/cam.png'
import Add from '../assests/add.png'
import More from '../assests/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const {data} = useContext(ChatContext)
  console.log(data)
  return (
    <div className='flex-[4]'>
        <div className='h-[55px] flex items-center p-3 text-gray-400 bg-[#5d5b8d] justify-between'>
            <span>{data.user?.displayName}</span>
            <div className='flex gap-3'>
                <img className='h-6 cursor-pointer' src={Cam} alt='Cam'/>
                <img className='h-6 cursor-pointer' src={Add} alt='Add'/>
                <img className='h-6 cursor-pointer' src={More} alt='More'/>
            </div>
           
        </div>
        <Messages/>
        <Input/>
    </div>
  ) 
}

export default Chat