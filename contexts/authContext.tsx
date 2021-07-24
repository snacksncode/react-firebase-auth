import firebaseApp from "firebase/app";
import React, { createContext, useContext, useEffect, useState } from "react";
import firebase, { auth } from "../lib/firebase";

interface Context {
  currentUser: firebaseApp.User | null;
  signUp: (email: string, password: string) => Promise<firebaseApp.auth.UserCredential | null>;
}

const defaultContext: Context = {
  currentUser: null,
  signUp: async () => null,
};

const AuthContext = createContext<Context>(defaultContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebaseApp.User | null>(null);
  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signUp,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        return console.log("No user");
      }
      console.log("Got user", user);
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
