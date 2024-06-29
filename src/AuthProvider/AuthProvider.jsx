// import React from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/firebase/firebase.config";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)

const googleProvider =new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    // const navigate = useNavigate()
    const [user, setUser] = useState(null)
    console.log(user);

    const [loading, setLoading] = useState(true)



    const createUser = (email, password)=>{
        setLoading(true)
     return  createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // log out method
    const logout = ()=>{
        setLoading(true)
       setUser(null)
        signOut(auth)
        
        if(signOut){
            Swal.fire({
                              icon: "success",
                              title: "Log Out",
                              text: "Successfully you are loged out",
                              footer: '<p>Thank You</p>'
                            })
        }
    }

    // observer
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
         setLoading(false)
        }
      },[]);

      useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoading(false)
        })
        return ()=>{
            unsubscribed()
        }
      },[])

    const allValue ={
        createUser,
        loading,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        
        
       
    }
    return (
        <AuthContext.Provider value={allValue}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;