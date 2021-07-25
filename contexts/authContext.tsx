import firebaseApp from "firebase/app";
import React, { createContext, useContext, useEffect, useState } from "react";
import firebase, { auth } from "../lib/firebase";

interface Context {
  currentUser: firebaseApp.User | null;
  signUp: (email: string, password: string) => Promise<firebaseApp.auth.UserCredential | null>;
  logIn: (email: string, password: string) => Promise<firebaseApp.auth.UserCredential | null>;
  logOut: () => Promise<void>;
}

const defaultContext: Context = {
  currentUser: null,
  signUp: async () => null,
  logIn: async () => null,
  logOut: async () => {},
};

const AuthContext = createContext<Context>(defaultContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebaseApp.User | null>(null);

  const logIn = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const providedValues = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={providedValues}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
