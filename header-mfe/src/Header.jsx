import React from "react";
import './Header.css'; // Importation du fichier CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mon Application</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
