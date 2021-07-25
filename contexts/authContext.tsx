import firebase from "firebase/app";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

interface Context {
  currentUser: firebase.User | null;
  signUp: (email: string, password: string) => Promise<firebase.auth.UserCredential | null>;
  logIn: (email: string, password: string) => Promise<firebase.auth.UserCredential | null>;
  logOut: () => Promise<void>;
  loading: boolean;
}

const defaultContext: Context = {
  currentUser: null,
  signUp: async () => null,
  logIn: async () => null,
  logOut: async () => {},
  loading: false,
};

const AuthContext = createContext<Context>(defaultContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  const logIn = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const providedValues: Context = {
    currentUser,
    signUp,
    logIn,
    logOut,
    loading,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={providedValues}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
