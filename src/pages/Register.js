import React from 'react'
import Avatar from "../assests/addAvatar.png"
const Register = () => {
  return (
    <div className='h-screen  flex items-center justify-center bg-[#a7bcff] '>
      <div className='bg-white py-6 px-10 flex flex-col gap-5 items-center'>
      <span className='text-[#5d5b8d] font-semibold text-[22px]'>WeChat</span> 
      <span className='text-[#5d5b8d] font-semibold text-[18px]'>Register</span> 
        <form className='flex flex-col gap-5'>
          <input className='p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none' type="text" placeholder='Display Name'/>
          <input className='p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none' type="email" placeholder='Email'/>
          <input className='p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none' type="password" placeholder='Password'/>
          <label htmlFor='file'className='flex items-center gap-3 text-[13px] text-[#5d5b8d] cursor-pointer'>
            <img className='w-[50px]' src={Avatar} alt='avatar'/>
            <span>Add an avatar</span>
          </label>
          <input className='p-3 hidden' type="file" id='file' placeholder='Add an avatar'/>
          <button className='p-3 text-white border-none bg-[#7b96ec] font-semibold cursor-pointer'>Sign Up</button>
          <div>
            <p className='text-[#5d5b8d] text-[12px] mt-1'>You do have an account? <b className='cursor-pointer'>Login</b> </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register