// src/SignIn.js
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"; // Adicione 'signOut' aqui
import './App.css'; // Importando o CSS

export const SignOut = () => {
  const auth = getAuth();

  return auth.currentUser ? (
    <button className="signout-button" onClick={() => signOut(auth)}>
      Sair
    </button>
  ) : null;
};

export const SignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Erro ao fazer login com o Google: ", error);
    }
  };

  return (
    <div className="sign-in">
      <h1>Bem-vindo ao Chat</h1>
      <p>Faça login com sua conta do Google para começar a conversar.</p>
      <button onClick={signInWithGoogle} className="google-signin-button">
        Entrar com o Google
      </button>
    </div>
  );
};
