import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import app from "./../firebase/firebase.config";

const GoogleProvider = new GoogleAuthProvider();
const TwitterProvider = new TwitterAuthProvider();
export const AuthContext = createContext(null);
// const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app);

  const register = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const GoogleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider);
  };
  const TwitterSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, TwitterProvider);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
      console.log(currentUser);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const AuthInfo = {
    register,
    login,
    logOut,
    user,
    GoogleSignIn,
    TwitterSignIn,
  };

  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
