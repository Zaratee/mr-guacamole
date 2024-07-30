import React from 'react'
import inicioLogo from 'src/assets/common/inicioLogo.png'
export const Inicio = () => {
  return (
    <div className=' h-full flex items-center justify-center md:justify-around   px-4'>
      <div className='flex mt-16 flex-col gap-3  w-[100%]  md:w-fit'>
        <div className=' text-6xl font-bold lexend'>Catálogo Virtual</div>
        <div className=' text-4xl font-extralight lexend'> Cotiza los productos para<br/> recibirlos a domicilio! </div>
        <div className=' cursor-pointer mt-3 lexend bg-gradient-to-r from-[#4C8F47] to-[#C2D856] text-xl rounded-full w-fit px-10 py-3 font-bold text-white'> Ver Catálogo </div>
      </div>
      <img className=' mt-16 collapse md:visible w-0 md:w-[450px] h-[450px]' src={inicioLogo}/>
    </div>
  )
}

