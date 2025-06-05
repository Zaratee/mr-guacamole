import React from 'react'
import PropTypes from 'prop-types'
import app from 'src/firebaseconfig'
import {getDatabase, ref, set, push} from  "firebase/database"

export const addProduct = (data)=>{
    const {category, name, description, price} = data 
    const db = getDatabase(app)
    const newProductRef = push(db, `Product/${category}/`)
    set(newProductRef, {
        name,
        description,
        price
    }).then(()=>{
        alert('AGREGADO!! (:')
    }).catch((err)=>console.log(err))
}


