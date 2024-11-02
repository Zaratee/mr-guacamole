import React from 'react'
import inicioLogo from 'src/assets/common/inicioLogo.png'


export const Inicio = () => {

  return (
    <div className=' h-full flex flex-col md:flex-row items-center justify-evenly md:justify-around px-4'>
      <div className='flex flex-col gap-3 p-2 w-[100%]  md:w-fit'>
        <div className=' text-5xl md:text-6xl font-bold lexend'>Catálogo Virtual</div>
        <div className=' text-2xl md:text-4xl font-extralight lexend'> Cotiza los productos para<br/> recibirlos a domicilio! </div>
        <div className=' self-start select-none cursor-pointer mt-3 lexend bg-gradient-to-r from-[#4C8F47] to-[#C2D856] text-xl rounded-full w-fit px-10 py-2 md:py-3 font-bold text-white'> Ver Catálogo </div>
      </div>
      <img alt='inicioLOGO' className='md:mt-16 w-[300px] h-[300px] md:w-[450px] md:h-[450px]' src={inicioLogo}/>
    </div>
  )
}

