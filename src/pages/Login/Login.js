import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import Input from 'src/components/Input'
import {getAuth} from 'firebase/auth'
import app from 'src/firebaseconfig'
const auth = getAuth(app)

export const Login = () => {
    
    const [error, setError] = useState(' ')
    const onSubmitAuth = async (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(email.trim() !== '' && password.trim() !== ''){
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (e) {
                setError('*Credenciales inválidas')
            }
        }else{
            setError('*Campos inválidos')
        }
    }
     
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='bg-slate-50 w-[70%] h-[60%] border border-slate-100 shadow-xl flex flex-col md:flex-row'>
            <div className='w-full md:w-[50%] h-full flex p-3 flex-col gap-3'>
                <form onSubmit={onSubmitAuth} className='flex flex-col items-center p-6 h-full justify-center'>
                    <div className='text-center w-full text-xl font-light '>Iniciar Sesión</div>
                    <Input name={'email'}/>
                    <Input name={'password'} type={'password'}/>
                    <div className='text-xs h-[1rem] text-red-800 text-left w-full'>{error}</div>
                    <button className='hover:bg-[#0091ff] bg-[#007bff] p-2 text-white w-fit px-5 rounded-full text-sm mt-1'> Ingresar</button>
                </form>
            </div>
            <div className='w-full md:w-[50%] h-full flex items-center justify-center  relative'>
                <div className='w-fit h-full flex items-center justify-center absolute top-0 left-0'>
                    <div className=' collapse md:visible border-l-[2px] border-slate-200 h-[85%] w-[2px]'></div>
                </div>
                <img alt='logo' src='/fullLogo.png' className='w-[60%]'/>
            </div>
        </div>
    </div>
  )
}
