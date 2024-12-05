<<<<<<< HEAD
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';


export const AuthContext = createContext(null)
// const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] =useState('')
    const auth = getAuth(app);


    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            Unsubscribe()
        }
    },[])




    const AuthInfo = {
        register,
        login,
        logOut,
        user
    }


  return (
    <div>
       <AuthContext.Provider value={AuthInfo}>
       {children}
       </AuthContext.Provider>
    </div>
  )
}

=======
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';


export const AuthContext = createContext(null)
// const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] =useState('')
    const auth = getAuth(app);


    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            Unsubscribe()
        }
    },[])




    const AuthInfo = {
        register,
        login,
        logOut,
        user
    }


  return (
    <div>
       <AuthContext.Provider value={AuthInfo}>
       {children}
       </AuthContext.Provider>
    </div>
  )
}

>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
export default AuthProvider