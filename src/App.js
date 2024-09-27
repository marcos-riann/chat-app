// src/App.js
import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./ChatRoom";
import { SignIn, SignOut } from "./SignIn"; // Importando como exportações nomeadas
import Footer from "./Footer"; // Importando o componente Footer
import './App.css'; // Importando os estilos

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Spacean App</h1>
        <SignOut />
      </header>

      <section className="app-section">
        {user ? <ChatRoom /> : <SignIn />}
      </section>

      <Footer />
    </div>
  );
}

export default App;
  