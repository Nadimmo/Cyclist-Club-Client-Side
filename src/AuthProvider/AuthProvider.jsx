
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import app from './../firebase/firebase.config';

const GoogleProvider = new GoogleAuthProvider();
const TwitterProvider = new TwitterAuthProvider()
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

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth, GoogleProvider)
    }
    const TwitterSignIn = ()=>{
        return signInWithPopup(auth, TwitterProvider)
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
        user,
        GoogleSignIn,
        TwitterSignIn
    }


  return (
    <div>
       <AuthContext.Provider value={AuthInfo}>
       {children}
       </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider