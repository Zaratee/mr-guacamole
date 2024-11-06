import React from 'react'
import PowerIcon from 'src/assets/icones/power'
import ProductsIcon from 'src/assets/icones/products'
import app from 'src/firebaseconfig'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(app) 

export const Navbar = (props) => {
    const {showNavbar, handlerShowNavbar} = props
    const navbarMobileClasses = '!w-full absolute top-0 left-0 !visible bg-black bg-opacity-30'
  return (
    <div onClick={()=>handlerShowNavbar(!showNavbar)} className={ `${showNavbar && navbarMobileClasses} collapse w-0 md:visible h-full  md:w-[10%] flex items-center justify-center`}>
       <div className='w-[70%] h-[80%] bg-slate-50 shadow-xl border-y-slate-200 border rounded-md flex flex-col justify-between'> 
            <div className='w-full h-[10%] cursor-pointer bg-slate-200 flex items-center border-b-slate-300 border justify-center hover:bg-slate-100'>
                <ProductsIcon/>
            </div>
            <div onClick={()=>signOut(auth)} className='w-full h-[10%] cursor-pointer bg-slate-100 flex items-center rounded-b-md border-t-slate-300 border justify-center hover:bg-slate-200'>
                <PowerIcon/>
            </div>
       </div>
    </div>
  )
}
