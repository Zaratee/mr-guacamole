import React, { useState } from 'react'
import Header from './components/Header'
import ProductsContainer from './components/ProductsContainer'
import ModalProduct from './components/ModalProduct'

export const ModalProductContext = React.createContext();

export const Products = () => {
  
  const [showProductModal, setShowProductModal] = useState(false)

  return (
    <div className='w-full h-full relative'> 
      <ModalProductContext.Provider value={[showProductModal, setShowProductModal]} >
          <Header/> 
          <ProductsContainer/>
          <ModalProduct/>
      </ModalProductContext.Provider>
    </div>
  )
}
