import React from 'react'
import spinner from "../assests/ripple.gif"

const Loader = () => {
  return (
    <div>
            <img className='w-[25px]' src={spinner} alt="loading..."/>
    </div>
  )
}

export default Loader