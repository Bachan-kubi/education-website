import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase.Config';
import { useState } from 'react';
import { useEffect } from 'react';
// import {app} from '../firebase/Firebase.Config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const user = {displayName: 'Bachan Kubi'}
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    //google popup provider
    const providerLogIn = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    //if user change base on usestate
    useEffect(()=>{
        const unsubcribe =onAuthStateChanged(auth, (currentUser)=>{
            console.log('user changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubcribe();
        }
    },[]);

    const authInfo = {user, loading, providerLogIn, logOut, createUser, signIn, updateUserProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;