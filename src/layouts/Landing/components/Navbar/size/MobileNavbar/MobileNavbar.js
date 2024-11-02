import React from 'react'
import AvocadoIcon from 'src/assets/icones/avocado'
import MenuIcon from 'src/assets/icones/menu'

export const MobileNavbar = (props) => {
    const {navbarData, handlerOnClickNavbar, hideNavbar, showMobileNavbar} = props

    if(!showMobileNavbar){
        return
    }

    const handlerOnClickNavbarItem = (label)=>{
        handlerOnClickNavbar(label)
        hideNavbar()
    }

  return (
    <div className=' md:collapse fixed left-0 top-0 flex w-full h-full z-40 bg-black bg-opacity-20' onClick={hideNavbar}>
        <div className='w-[65%] h-[100%] bg-white flex relative flex-col z-50'>
            <div className=' select-none self-end p-4' onClick={hideNavbar}>
                <MenuIcon size='1.8rem' />
            </div>
            <div className=' p-4 flex flex-col gap-10 text-3xl'>
                {navbarData.map((data)=>{
                    const {isActive, label} = data
                    return(
                        <div key={label} className={`cursor-pointer select-none ${isActive && ' bg-slate-400 bg-opacity-20'} font-light`} onClick={()=>handlerOnClickNavbarItem(label)}>
                            {label}
                        </div>  
                    )
                })}
            </div>
            <div className=' flex  items-center justify-center bottom-10 absolute w-full'>
                <AvocadoIcon/>
            </div>
        </div>
    </div>
  )
}

