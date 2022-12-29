import React from "react";
import { createContext } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google
    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // sign up with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // update profile
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };
    // load user info from firebase:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user observing");
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loading,
        googleProviderLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
