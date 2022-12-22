import React from 'react'
import Img from "../assests/img.png"
import Attach from "../assests/attach.png"
const Input = () => {
  return (
    <div className='h-[55px] bg-white p-3 flex items-center justify-between'>
        <input type="text" placeholder='Type Something' className='w-[100%] border-none outline-none text-[#2f2d52] text-[18px] placeholder:text-gray-400 indent-2 tracking-wide'/>
        <div className='flex items-center gap-3'>
            <img className='h-6 cursor-pointer' src={Attach} alt='Attach'/>
            <input type="file" className='hidden' id='file'/>
            <label htmlFor='file'>
                <img src={Img} alt='Img'/>
            </label>
            <button className='border-none p-3 text-white bg-[#8da4f1]'>Send</button>
        </div>
    </div>
  )
}

export default Input