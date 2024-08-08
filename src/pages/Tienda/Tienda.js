import React from 'react'
import localFurea from './src/img/local1.jpg'

export const Tienda = () => {
  return (
    <div className='w-full h-full flex justify-between bg-white'>
      <div className='  mt-14 p-4 w-[50%] '>
        <div className='text-7xl font-bold lexend text-slate-800'>
          ¡Visitanos!
        </div>
      <div className='w-full h-[10px] bg-[#C2D856] mt-4'></div>
        <div className=' text-slate-600 lexend text-3xl font-light mt-4 text-center'> 
          Ven a nuestra tienda y ve todos los grandes productos que tenemos para ti.
        </div>
        <div className=' text-slate-400 lexend text-xl font-light mt-1 text-center'> 
          Horario: L-V 11am a 6pm & Sábado 11am a 3pm
        </div>
        <div className='mt-4 flex justify-center relative '>
          <div className='w-[55%] h-[320px] z-10 bg-[#C2D856] absolute rounded-[20px] shadow-2xl'></div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.8395330463773!2d-103.38603272517105!3d20.757297097047836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a59e38e28173%3A0xac140c08284fa8d5!2sMr.%20Guacamole!5e0!3m2!1sen!2smx!4v1723145072242!5m2!1sen!2smx" 
           width="50%" height="300px" style={{border:0, zIndex:11, marginTop:10}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='w-full h-[20px]'></div>
      </div>
      <div className='w-[50%] '>
        <img src={localFurea} className=' h-full'/>
      </div>
    </div>
  )
}

