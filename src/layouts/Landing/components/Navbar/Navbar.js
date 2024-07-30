import React from 'react'
import MenuIcon from 'src/assets/icones/menu'
import logo from 'src/assets/common/logo.png'
export const Navbar = () => {
  return (
    <div className='p-6 px-14 flex'>
      <MenuIcon size='2.5rem'/>
      <div className=' flex gap-14 ml-14 items-center  w-[70%]'>
        <div>Inicio</div>
        <div>Nosotros</div>
        <div>Catálogo</div>
        <div>Contactanos</div>
      </div>
      <img className='hidde-logo w-[165px] h-[50px] fixed right-14 top-6' src={logo}/>
    </div>
  )
}

