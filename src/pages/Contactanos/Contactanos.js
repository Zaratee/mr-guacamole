import React from 'react'
import GooglePinIcon from 'src/assets/icones/googlePin'
import WhatsappIcon from 'src/assets/icones/whatsapp'

export const Contactanos = () => {
  return (
  <div className='w-full flex flex-col justify-center h-full'>
      <div className=' w-full h-full  mt-[80px] flex justify-center items-center'>
        <div className=' md:-ml-56 h-fit shadow-xl  w-[280px] md:w-[550px] rounded-md'>  
          <div className='h-full md:flex '>
            <img alt='local' src='/local1.jpg' className='  w-full '/>
            <div className='text-center p-4 bg-slate-50 h-auto '>
              <div className=' font-light text-xl '>
                  Estamos a sus ordenes en nuestro punto de venta! 
              </div>
              <div className=' flex flex-col gap-7 p-2 justify-evenly mt-4 h-full  '>
                <div className='self-center h-fit w-[200px] flex flex-col bg-slate-200 text-md p-3 text-slate-600 rounded-md border-slate-600 border '>
                  <div className='text-base mb-1'>Horario</div>
                  <div><span className='font-bold'>Lunes a Viernes</span><br/> 11pm - 6pm</div>
                  <div className='mt-2'><span className='font-bold'>Sábados</span> <br/>11pm - 3pm</div>
                </div>
                <div className='flex flex-col h-full gap-3'>
                  <a href='https://www.google.com/maps/place/Mr.+Guacamole/@20.7574369,-103.383477,20.92z/data=!4m6!3m5!1s0x8428a59e38e28173:0xac140c08284fa8d5!8m2!3d20.7572921!4d-103.3834578!16s%2Fg%2F11vpk6ws0p?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' className='text bg-slate-200 hover:bg-slate-100 cursor-pointer text-slate-500 flex justify-center items-center gap-2 p-2 px-5 rounded-full border border-slate-300 '> <GooglePinIcon/> Punto de Venta</a>
                  <a href='https://wa.me/5213317003596' className='bg-[#48c856] hover:bg-[#55e566] cursor-pointer text-slate-50 font-bold flex justify-center items-center gap-1 md:text-sm p-3 px-5 rounded-full border border-slate-50 '> <WhatsappIcon/>+52 33 1700 3596</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

