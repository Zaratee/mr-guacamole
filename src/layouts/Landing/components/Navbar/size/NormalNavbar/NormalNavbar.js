import React from 'react'
import LineSvg from 'src/assets/svg/lineSvg'

export const NormalNavbar = (props) => {
    const {navbarData, handlerOnClickNavbar} = props
    
  return (
    <div className=' collapse md:visible flex gap-14 ml-14 items-center  w-[70%]'>
    {
      navbarData.map((data)=>{
        const {isActive, width, label} = data
        return(
            <div key={label} className='cursor-pointer select-none bg' onClick={()=>{handlerOnClickNavbar(label)}}>
                {label}
                {isActive && <div><LineSvg width={width}/></div>}
            </div>  
        )
      })
    }
  </div>
  )
}

