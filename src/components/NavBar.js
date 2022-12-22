import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center bg-[#2f2d52] h-[50x] p-3 justify-between text-white'>
        <span className='font-semibold'>WeChat</span>
        <div className='flex gap-3'>
            <div className='flex gap-3 items-center'>
                <img className='bg-[#ddddf7] w-[28px] h-[28px] rounded-full' src='https://img.freepik.com/free-photo/portrait-shirtless-young-man-isolated-grey-studio-background-caucasian-healthy-male-model-looking-side-posing-concept-men-s-health-beauty-self-care-body-skin-care_155003-33864.jpg?w=2000' alt=''/>
                <span>John</span>
                <button className='bg-[#ddddf7] border-none text-[10px cursor-pointer p-2 rounded-lg'>Logout</button>
            </div>
        </div>

    </div>
  )
}

export default NavBar