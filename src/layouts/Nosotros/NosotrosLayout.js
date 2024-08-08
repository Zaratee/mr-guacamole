import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import BackArrowIcon from 'src/assets/icones/backArrow'

export const NosotrosLayout = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] relative bg-slate-100'>
        <Outlet/>
        <div onClick={()=>{navigate('/inicio')}} className=' cursor-pointer absolute left-2 top-2 rounded-full bg-[#C2D856] w-fit p-3 shadow-lg'>
            <BackArrowIcon/>
        </div>
    </div>
  )
}

