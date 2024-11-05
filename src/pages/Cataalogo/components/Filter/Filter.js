import React, { useState } from 'react'

export const Filter = () => {

    const [data, setData] = useState([{
        name: 'Todo',
        iconSrc: 'all.webp',
        isActive: true
    },
    {
        name: 'Cosméticos',
        iconSrc: 'skincare.png',
        isActive: false
    },
    {
        name: 'Guacamole',
        iconSrc: 'guacamole.png',
        isActive: false

    },
    {
        name: 'Extras',
        iconSrc: 'extras.png',
        isActive: false
    }])
    const handlerOnClick = (selectedIndex) =>{
        setData(data.map((data,index) => {
            if(index === selectedIndex){
              return{...data, isActive: true}
            }else {
              return {...data, isActive: false}
            }
        }))
    }
  return (
    <div className='w-full p-3 flex justify-center items-center md:gap-10 gap-2 mt-8 '>
        {
            data.map((data, index)=>{
                return(
                    <div onClick={()=>handlerOnClick(index)} className={`cursor-pointer p-3 shadow-md bg-slate-100  border h-[80px] w-[80px] flex items-center rounded-2xl ${data.isActive && '!bg-slate-50 border border-slate-400'}`}>
                        <img alt='filter' src={data.iconSrc} className='w-full'/>
                    </div>
                )
            })
        }
    </div>
  )
}

