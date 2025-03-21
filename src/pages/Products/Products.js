import React, { useState } from 'react'
import Header from './components/Header'
import ProductsContainer from './components/ProductsContainer'
import ModalAddProduct from './components/ModalAddProduct'

export const ModalProductContext = React.createContext();

export const Products = () => {
  
  const [showProductModal, setShowProductModal] = useState(false)

  return (
      <ModalProductContext.Provider value={[showProductModal, setShowProductModal]} >
          <div className='w-full h-full relative z-10 '> 
                <Header/> 
                <ProductsContainer/>
                <ModalAddProduct/>
          </div>
      </ModalProductContext.Provider>
  )
}
