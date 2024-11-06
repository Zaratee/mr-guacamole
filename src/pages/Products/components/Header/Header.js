import React from 'react'

export const Header = () => {
  return (
    <div className='w-full h-[20%] flex justify-center items-center'>
        <div className=' p-5 w-[90%] h-[80%] bg-slate-50 shadow-sm border-y-slate-200 border rounded-md flex flex-col justify-between'>
            <div className='text-4xl md:text-6xl font-extralight md:font-thin  lexend'>Productos</div>
            <div className='self-end '><div className=' hover:bg-opacity-90 select-none cursor-pointer bg-[#28a745] px-3 text-white rounded-md text-xs p-1'>Agregar</div></div>
        </div>
    </div>
  )
}
