import Message from './Message'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'


const Messages = () => {
  const [message, setMessage] = useState([])
  const {data} = useContext(ChatContext)

  useEffect(() => {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessage(doc.data().messages)
      })

      return () => {
          unsub()
      }
  },[data.chatId])
  return (
    <div className='bg-[#ddddf7] p-3 h-[calc(100%-110px)] overflow-y-scroll'>
       {message.map(msg => (
         <Message message={msg} key={msg.id}/>
       ))}
    </div>
  )
}

export default Messages