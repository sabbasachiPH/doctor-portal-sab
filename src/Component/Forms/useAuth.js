import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { createContext } from "react";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const auth = Auth();
  return <AuthContext.Provider>{props.children} </AuthContext.Provider>;
};

const Auth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
};

export default Auth;
