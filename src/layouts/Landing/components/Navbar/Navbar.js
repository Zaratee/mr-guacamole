import React, { useEffect, useState } from 'react'
import logo from 'src/assets/common/logo.png'
import NavbarItem from './components/NavbarItem';
import { useNavigate } from 'react-router-dom';
import AvocadoIcon from 'src/assets/icones/avocado';

export const Navbar = () => {

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
const navigate = useNavigate()
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

  return (
    <div className='p-6 px-14 flex fixed top-0'>
      <div className=' select-none'>
        <AvocadoIcon />
      </div>
      <div className=' flex gap-14 ml-14 items-center  w-[70%]'>
        {
          navbarData.map((data)=>{
            return(
              <NavbarItem handlerOnClickNavbar={handlerOnClickNavbar} isActive={data.isActive} width={data.width} label={data.label}/>
            )
          })
        }
      </div>
      <img alt='logo' className='hidde-logo w-[165px] h-[50px] fixed right-14 top-6' src={logo}/>
    </div>
  )
}

