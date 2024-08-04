// src/FirebaseContext.js
'use client';

import  { createContext, useContext } from "react";
import { db, analytics } from "./index";

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ db, analytics }}>
    {children}
  </FirebaseContext.Provider>
);

export const useFirebase = () => useContext(FirebaseContext);
