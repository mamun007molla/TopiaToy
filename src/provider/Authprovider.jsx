import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext =createContext();
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        
    };

    // signin user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // create a user with google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    // forget password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    // observe auth state change

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    // sign out user
    const signOutUser = () => {
        return auth.signOut();
    };
    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        loading,
        setLoading,
        signInWithGoogle,
        resetPassword
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default Authprovider;