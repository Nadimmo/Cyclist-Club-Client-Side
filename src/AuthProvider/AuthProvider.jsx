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
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";

const GoogleProvider = new GoogleAuthProvider();
const TwitterProvider = new TwitterAuthProvider();
export const AuthContext = createContext(null);

// const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const auth = getAuth(app);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  const TwitterSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, TwitterProvider);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      const userInfo = { email: currentUser.email };
      axiosPublic.post("/jwt", userInfo).then((res) => {
        if (res.data.token) {
          localStorage.setItem("access-token", res.data.token);
          setLoading(false);
        } else {
          localStorage.removeItem("access-token");
          setLoading(false);
        }
      });
    });
    return () => {
      Unsubscribe();
    };
  }, [auth, axiosPublic]);

  const AuthInfo = {
    register,
    login,
    logOut,
    user,
    loading,
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
