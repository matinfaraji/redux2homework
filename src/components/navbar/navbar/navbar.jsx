import  { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Simply Natural</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </div>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <a href="/home" className="menu-item">
          Home
        </a>
        <a href="/about" className="menu-item">
          About Us
        </a>
        <a href="/contact" className="menu-item">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
