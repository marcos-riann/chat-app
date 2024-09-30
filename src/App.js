// src/App.js
import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom"; // Atualize o caminho se necessário
import SignIn from "./components/SignIn"; // Atualize o caminho se necessário
import SignOut from "./components/SignOut"; // Atualize o caminho se necessário
import Footer from "./components/Footer"; // Importe o Footer
import './App.css'; // Importando os estilos

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Chat App</h1>
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