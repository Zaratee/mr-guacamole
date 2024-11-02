import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from 'src/assets/icones/home'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between md:px-14'>
        <div onClick={()=>navigate('/inicio')}><HomeIcon/></div>
        <img onClick={()=>navigate('/inicio')} alt='logo' className=' w-[165px] h-[50px] fixed right-7 md:right-4 top-6' src={'/logo.png'}/>
      </div>
  )
}

