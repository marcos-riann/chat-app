// src/ChatRoom.js
import React, { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import './App.css';  // Importar o CSS

const ChatRoom = () => {
  const firestore = getFirestore();
  const auth = getAuth();
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue("");
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <form onSubmit={sendMessage} className="message-form">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Escreva sua mensagem"
          className="message-input"
        />
        <button type="submit" className="send-button" disabled={!formValue}>Enviar</button>
      </form>
    </div>
  );
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const auth = getAuth();
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt="Avatar" className="avatar" />
      <p className="message-text">{text}</p>
    </div>
  );
}

export default ChatRoom;
