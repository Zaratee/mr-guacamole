import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import app from 'src/firebaseconfig'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(app)

export const AuthGuard = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    onAuthStateChanged(auth, (firebaseUser)=> {
        if(firebaseUser){
            setUser(firebaseUser)
        }else{
            setUser(null)
        }
    })
    
    useEffect(() => {
        user == null ? 
        navigate('/admin/login') 
        : navigate('/admin/products')
    }, [user])
    

  return (
    <>
     <Outlet/>
    </>
  )
}
