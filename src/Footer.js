// src/Footer.js
import React from 'react';
import './App.css'; // Importando estilos

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>
        Developed by Marcos Rian. <br/>
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
