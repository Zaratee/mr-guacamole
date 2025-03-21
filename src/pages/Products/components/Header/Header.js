import React, { useContext } from 'react'
import { ModalProductContext } from '../../Products'
// import { ModalProductContext } from 'src/pages/Products'

export const Header = () => {
    const [showProductModal, setShowProductModal] = useContext(ModalProductContext)
  return (
    <div className='w-full h-[20%] flex justify-center items-center'>
        <div className=' relative p-5 w-[90%] h-[80%] bg-slate-50 shadow-sm border-y-slate-200 border rounded-md flex justify-between '>
            <div className='text-4xl md:text-6xl font-extralight md:font-thin lexend'>Productos</div>
            <div onClick={()=> setShowProductModal(!showProductModal)} className='  hover:bg-opacity-90 transition-all absolute bg-green-600 text-white right-3 bottom-3 px-3 py-1 rounded-sm cursor-pointer'> Agregar</div>
        </div>
    </div>
  )
}
