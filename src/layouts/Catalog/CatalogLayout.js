import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

export const CatalogLayout = () => {
  
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-50 p-6 relative'>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Cart/>
    </div>
  )
}
