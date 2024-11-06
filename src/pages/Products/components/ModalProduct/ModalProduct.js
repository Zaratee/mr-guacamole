import React, { useContext } from 'react'
import CrossIcon from 'src/assets/icones/cross'
import { ModalProductContext } from '../../Products'

export const ModalProduct = () => {
    const [showProductModal, setShowProductModal] = useContext(ModalProductContext)

    if(!showProductModal){
        return
    }

    return (
        <div className='absolute top-0 left-0 w-full h-full  flex justify-end'>
            <div className='w-[50%] bg-slate-100 h-full shadow-xl flex flex-col'>
                <div className='self-end p-4 cursor-pointer' onClick={()=>setShowProductModal(!showProductModal)}><CrossIcon/></div>
            </div>
        </div>
    )
}

