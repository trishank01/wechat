import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/authContext'

const NavBar = () => {
    const {currentUser} = useContext(AuthContext)
  return (
    <div className='flex items-center bg-[#2f2d52] h-[50x] p-3 justify-between text-white'>
        <span className='font-semibold'>WeChat</span>
        <div className='flex gap-3'>
            <div className='flex gap-3 items-center'>
                <img className='bg-[#ddddf7] w-[28px] h-[28px] rounded-full' src={currentUser.photoURL} alt=''/>
                <span>{currentUser.displayName}</span>
                <button className='bg-[#ddddf7] border-none text-[10px cursor-pointer p-2 rounded-lg' onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>

    </div>
  )
}

export default NavBar