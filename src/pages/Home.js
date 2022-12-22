import React from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <div className='bg-[#a7bcff] h-screen flex items-center justify-center'>
       <div className='w-[100%] h-[100%] flex'>
           <SideBar/>
           <Chat/>
       </div>
    </div>
  )
}

export default Home