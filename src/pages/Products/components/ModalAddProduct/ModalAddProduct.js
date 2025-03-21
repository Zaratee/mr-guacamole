import React, { useContext } from 'react'
import CrossIcon from 'src/assets/icones/cross'
import Input from 'src/components/Input'
import { ModalProductContext } from '../../Products'



export const ModalAddProduct = () => {
    const [showProductModal, setShowProductModal] = useContext(ModalProductContext)

    if(!showProductModal){
        return
    }

    return (
        <div className='` absolute top-0 left-0 w-full h-full  flex justify-end'>
            <div className='z-50 w-[50%] bg-slate-50 h-full shadow-xl flex flex-col'>
                <div className=' bg-white py-6 px-3 flex flex-col border-b border-b-slate-300 relative'>
                    <div className='absolute right-2 top-2 cursor-pointer' onClick={()=>{setShowProductModal(!showProductModal)}}><CrossIcon/></div>
                    <div className='text-3xl md:text-4xl font-medium md:font-thin text-center lexend'>Agregar Producto</div>
                </div>
                <div className='w-full h-full flex gap-6 flex-col'>
                    <div className='h-[33%] mt-6 w-full p-2 flex justify-center'>
                        <div className='h-full w-[50%] bg-white rounded-lg border border-slate-400 flex items-center justify-center'>
                            <input type='file' className=' text-sm w-[50%] flex'/>
                        </div>
                    </div>
                    <div className='px-6'>
                        <Input name={'Nombre'}/>
                        <Input name={'Descripcion'}/>
                        <div className='flex gap-3'>
                            <Input name={'Categoria'}/>
                            <Input name={'Precio'}/>

                        </div>
                    </div>
                    <div className='flex justify-center '> 
                        <div className='bg-[#28a745] rounded-md hover:opacity-80 cursor-pointer text-white w-fit px-3 py-1 text-center'>Agregar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

