import React from 'react'
import background from './src/img/aguacateBg.jpg'
import logoIcon from 'src/assets/common/logoIcon.png'
export const Aguacate = () => {
  return (
    <div className='w-full h-full bg-[#C2D856] flex justify-center  relative'>
      <div className=' h-full w-full py-7 flex justify-center'>
        <div className='w-[50%] h-full bg-slate-100 rounded-lg shadow-xl overflow-hidden'>
          <img className=' w-full h-[25%] object-cover' src={background}/>
          <div className='h-[5px] w-full bg-[#C2D856]'></div>
          <div className='text-5xl font-bold lexend text-center mt-2 text-slate-900'>Aguacate orgánico</div>
          <div className='text-2xl font-light lexend p-5 text-slate-500 text-center'>
            El aguacate orgánico de México es un fruto con muchas propiedades que ayudan a la salud tanto de productores como de consumidores, así como a la conservación del medio ambiente. La diferencia fundamental que distingue a las frutas convencionales y a las orgánicas tiene que ver con la forma en que son cultivadas, sin el uso de fertilizantes, pesticidas, o cualquier otro elemento químico para su producción. Tampoco son modificadas genéticamente ni alteradas de ninguna forma.
          </div>

        </div>
      </div>
      <img src={logoIcon} alt='logo' width={90}  className='right-3 bottom-3 absolute'/>
    </div>
  )
}

