import React from 'react'
import app from 'src/firebaseconfig'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(app) 

export const AdminHome = () => {
  return (
    <div>
        <button onClick={()=>signOut(auth)}>logout</button>
    </div>
  )
}
