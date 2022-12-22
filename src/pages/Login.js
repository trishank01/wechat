import React from 'react'
const Login = () => {
  return (
    <div className='h-screen  flex items-center justify-center bg-[#a7bcff] '>
      <div className='bg-white py-6 px-10 flex flex-col gap-5 items-center'>
      <span className='text-[#5d5b8d] font-semibold text-[22px]'>WeChat</span> 
      <span className='text-[#5d5b8d] font-semibold text-[18px]'>Login</span> 
        <form className='flex flex-col gap-5'>
          <input className='p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none' type="email" placeholder='Email'/>
          <input className='p-3 md:min-w-[250px] border-0 border-b-2 border-solid focus:outline-none' type="password" placeholder='Password'/>
          <button className='p-3 text-white border-none bg-[#7b96ec] font-semibold cursor-pointer'>Sign in</button>
          <div>
            <p className='text-[#5d5b8d] text-[12px] mt-1'>You dont have an account  <b className='cursor-pointer'>Register</b> </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login