import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'

const Message = ({message}) => {
    const [owner, setOwner] = useState(false)

     console.log(message)
  return (
    <div className={`flex gap-5 mb-4 ${owner ? "flex-row-reverse" : ""}`}>
        <div className='flex flex-col text-gray-500 '>
            <img className='w-[50px] h-[50px] rounded-full object-cover' src='https://img.freepik.com/free-photo/portrait-shirtless-young-man-isolated-grey-studio-background-caucasian-healthy-male-model-looking-side-posing-concept-men-s-health-beauty-self-care-body-skin-care_155003-33864.jpg?w=2000' alt=''/>
            <span>just now</span>
        </div>
        <div className={`max-w-[80%] flex flex-col gap-3 ${owner ? "items-end" : ""}`}>
            <p className={`max-w-[max-content] ${owner ? "bg-[#8da4fa] p-3 text-white rounded-r-xl rounded-b-xl" : "bg-white p-3 rounded-r-xl rounded-b-xl"}`}>hello how are you </p>
            <img className='w-[200px] h-[200px] bg-slate-500 rounded-lg object-contain' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ilAyLxQL_tZrsH-vyVQC-gfzYrnwyjgpq7nWm-qpCVqLuxiUDvIh6MIiAaQYU3QtnMc&usqp=CAU' alt=''/>
        </div>
    </div>
  )
}



export default Message