// src/components/Footer.js
import React from 'react';
import '../App.css'; // Importar o CSS

const Footer = () => {

  return (
    <footer className="app-footer">
      <p>Desenvolvido por Marcos Rian</p>
      <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
