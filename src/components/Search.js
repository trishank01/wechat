import React, { useState } from 'react'

const Search = () => {
  const [userName, setUserName] = useState("")
  const [user, SetUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = () => {
    
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  return (
    <div className='border-0 border-b-2 border-solid border-gray-600'>
        <div className='p-3'>
        <input className='bg-transparent border-none placeholder:text-[lightgrey] text-white outline-none' type="text" placeholder='Find a User' onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKey}/>
        </div>
    
    </div>
  )
}

export default Search