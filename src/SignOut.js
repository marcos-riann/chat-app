// src/SignOut.js
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import './App.css'; // Importando os estilos

const SignOut = () => {
  const auth = getAuth();

  return auth.currentUser ? (
    <button className="signout-button" onClick={() => signOut(auth)}>
      Sair
    </button>
  ) : null;
};

export default SignOut;
