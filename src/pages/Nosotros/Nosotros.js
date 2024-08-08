import React, { useState } from 'react'
import avocado from './src/img/avocado.png'
import location from './src/img/location.png'
import shampoo from './src/img/shampoo.png'
import GooglePinSVG from 'src/assets/svg/googlePin'
import avocadoIcon from './src/img/avocadoIcon.png'
import { useNavigate } from 'react-router-dom'

export const Nosotros = () => {
  const [title, setTitle] = useState('Elige una opción')
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col justify-center h-full '>
      <div className='text-center text-5xl lexend w-full font-light'>
      {title}
      </div>
      <div className=' flex h-[60%] w-full justify-evenly gap-6 items-center'>
        <div onClick={()=>{navigate('/nosotros/tienda')}} onMouseEnter={()=>{setTitle('Tienda')}} className='w-15% relative hover:scale-105 transition-all cursor-pointer'>
          <img src={location} className='w-full ' />
          <div className='w-full h-full  absolute top-0 flex items-center justify-center'>
            <GooglePinSVG/>
          </div>
        </div>
        <div onClick={()=>{navigate('/nosotros/aguacate')}}  onMouseEnter={()=>{setTitle('Aguacate Orgánico')}} className='w-15% relative hover:scale-105 transition-all cursor-pointer'>
          <img src={avocado} className='w-full'/>
          <div className='w-full h-full  absolute top-0 flex items-center justify-center'>
            <img src={avocadoIcon} className='w-[155px] ' />
          </div>
        </div>
        <div onClick={()=>{navigate('/nosotros/productos')}}  onMouseEnter={()=>{setTitle('Productos del cuidado de piel y cabello')}} className='w-15% relative hover:scale-105 transition-all cursor-pointer'>
          <img src={shampoo} className='w-full'/>
        </div>
      </div>
    </div>
  )
}

