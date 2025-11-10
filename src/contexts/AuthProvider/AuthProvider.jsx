import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import auth from "./../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    };
    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null)
        } catch (err) {
            return toast.error(err.message);
        }
    }
    
    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    },[])
  const authInfo = {
    user,
    setUser,
    createUser,
    signInWithGoogle,
    loading,
    setLoading,
    loginUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
