import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MenuIcon from 'src/assets/icones/menu'
import CrossIcon from 'src/assets/icones/cross'

export const AdminLayoutt = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handlerShowNavbar = (value) => {
    setShowNavbar(value)
  }

  return (
    <div className='w-full h-full flex relative'>
        <Navbar showNavbar={showNavbar} handlerShowNavbar={handlerShowNavbar}/>
        <Outlet/>
        <div onClick={()=>{setShowNavbar(!showNavbar)}} className=' md:collapse cursor-pointer absolute right-2 bottom-2 p-3 rounded-full bg-slate-100 border border-slate-200 shadow-xl'>
          {showNavbar ? <CrossIcon/> :<MenuIcon size='1.6rem'/>  }
        </div>
    </div>
  )
}
