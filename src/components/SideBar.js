import React from 'react'
import Chats from './Chats'
import NavBar from './NavBar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='flex-1 bg-[#3e3c61]'>
        <NavBar/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default SideBar