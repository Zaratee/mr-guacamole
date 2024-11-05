import React from 'react'

export const Input = (props) => { 
    const {name, type='text'} = props
    const handlerOnInput = (value)=>{

    } 
  return (
  <div className='flex flex-col  py-2 w-full'>
      <label className='text-sm text-slate-500  '>{name}</label>
      <input type={type} className='bg-slate-100 border border-slate-200 rounded-md pl-3 text-slate-600 text-sm py-1 outline-[#4C8F47] ' onInput={(e)=>handlerOnInput(e.target)}/>
  </div>
  )
}
