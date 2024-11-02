import React, { useEffect, useState } from 'react'
import logo from 'src/assets/common/logo.png'
import { useNavigate } from 'react-router-dom';
import AvocadoIcon from 'src/assets/icones/avocado';
import MobileNavbar from './size/MobileNavbar';
import NormalNavbar from './size/NormalNavbar';

export const Navbar = () => {

  const navigate = useNavigate()
  const [showMobileNavbar, setShowMobileNavbar] = useState(false)
  const [navbarData, setNavbarData] = useState([
   {
    label: 'Inicio',
    isActive: true,
    width: 38
   },
   {
    label: 'Nosotros',
    isActive: false,
    width: 68
   },
   {
    label: 'Catálogo',
    isActive: false,
    width: 66
   },
   {
    label: 'Contactanos',
    isActive: false,
    width: 94
   }
 ])
 
  useEffect(() => {
    const indexOfSelection = navbarData.findIndex((element)=> element.isActive === true)
    navigate(indexOfSelection === 2 ? 'cataalogo': navbarData[indexOfSelection].label.toLowerCase())
    // eslint-disable-next-line
  }, [navbarData])

  const handlerOnClickNavbar = (newLabelActive)=>{
    const indexFound = navbarData.findIndex((element) => element.label === newLabelActive);
    setNavbarData(navbarData.map((data,index) => {
      if(index === indexFound){
        return{...data, isActive: true}
      }else {
        return {...data, isActive: false}
      }
    }))
  }

  const handlerVisibilityMobileNavbar = () => setShowMobileNavbar(!showMobileNavbar)

  return (
    <div className='p-6 md:px-14 flex fixed top-0'>
      <div className=' select-none' onClick={handlerVisibilityMobileNavbar}>
        <AvocadoIcon />
      </div>
      <NormalNavbar navbarData={navbarData} handlerOnClickNavbar={handlerOnClickNavbar}/>
      <MobileNavbar showMobileNavbar={showMobileNavbar} hideNavbar={handlerVisibilityMobileNavbar} navbarData={navbarData} handlerOnClickNavbar={handlerOnClickNavbar}/>
      <img alt='logo' className=' w-[165px] h-[50px] fixed right-7 md:right-4 top-6' src={logo}/>
    </div>
  )
}

