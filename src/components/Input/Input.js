import React from 'react'

export const Input = (props) => { 
    const {name, type='text'} = props
  return (
  <div className='flex flex-col  py-2 w-full'>
      <label className='text-sm text-slate-500  '>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</label>
      <input id={name} type={type} className='bg-slate-100 border border-slate-200 rounded-md pl-3 transition-all text-slate-600 text-sm py-1 outline-none focus:shadow-md ' />
  </div>
  )
}
