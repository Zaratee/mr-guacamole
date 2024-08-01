import React, { useEffect } from 'react'
import MenuIcon from 'src/assets/icones/menu'
import logo from 'src/assets/common/logo.png'
import anime from 'animejs/lib/anime.es.js';
import ItemBorderNavbar from 'src/assets/svg/itemBorderNavbar';

export const Navbar = () => {

  useEffect(() => {
    anime({
      targets: '#border1 path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutQuad',
      duration: 2000,
      delay: function(el, i) { return i * 450 },
      direction: 'alternate',
    });
  })
  return (
    <div className='p-6 px-14 flex'>
      <div className='cursor-pointer select-none'>
        <MenuIcon size='2.5rem'/>
      </div>
      <div className=' flex gap-14 ml-14 items-center  w-[70%]'>
        <div className='cursor-pointer select-none bg'>
          Inicio
          <div><ItemBorderNavbar width={38}/></div>
        </div>
        <div className='cursor-pointer select-none'>
          Nosotros
          <div><ItemBorderNavbar width={68}/></div>
        </div>
        <div className='cursor-pointer select-none'>
          Catálogo
        <div><ItemBorderNavbar width={66}/></div>
        </div>
        <div className='cursor-pointer select-none'>
          Contactanos
          <div><ItemBorderNavbar width={94}/></div>
        </div>
      </div>
      <img className='hidde-logo w-[165px] h-[50px] fixed right-14 top-6' src={logo}/>
    </div>
  )
}

