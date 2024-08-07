import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export const LandingLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-full h-[100vh] '> 
          <Outlet/>
        </div>
    </div>
  )
}

