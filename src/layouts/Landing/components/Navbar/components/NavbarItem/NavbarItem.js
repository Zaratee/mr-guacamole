import React from 'react'
import LineSvg from 'src/assets/svg/lineSvg'

export const NavbarItem = (props) => {
    const {isActive, width, label, handlerOnClickNavbar} = props
  return (
    <div className='cursor-pointer select-none bg' onClick={()=>{handlerOnClickNavbar(label)}}>
        {label}
        {isActive && <div><LineSvg width={width}/></div>}
    </div>  
)}

 