import React from 'react'
import Input from 'src/components/Input'

export const Login = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='bg-slate-50 w-[70%] h-[60%] border border-slate-100 shadow-xl flex flex-col md:flex-row'>
            <div className='w-full md:w-[50%] h-full flex p-3 flex-col gap-3'>
                <div className='flex flex-col items-center p-3 h-full justify-center'>
                <div className='text-center w-full text-xl font-light '>Iniciar Sesión</div>
                    <Input name={'Correo'}/>
                    <Input name={'Contraseña'} type={'password'}/>
                    <button className='hover:bg-[#0091ff] bg-[#007bff] p-2 text-white w-fit px-5 rounded-full text-sm mt-4'> Ingresar</button>
                </div>
            </div>
            <div className='w-full md:w-[50%] h-full flex items-center justify-center  relative'>
                <div className='w-fit h-full flex items-center justify-center absolute top-0 left-0'>
                    <div className=' collapse md:visible border-l-[2px] border-slate-200 h-[85%] w-[2px]'></div>
                </div>
                <img src='/fullLogo.png' className='w-[60%]'/>
            </div>
        </div>
    </div>
  )
}
