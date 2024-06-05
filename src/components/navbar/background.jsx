import "./background.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Background() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="heru">
        {/* nav bar */}
        <nav className="navbar">
          <div className="logo">Simply Natural</div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? "✕" : "☰"}
          </div>
          <div className={`menu ${isOpen ? "active" : ""}`}>
            <a href="#" className="menu-item home">
              Home
            </a>
            <a href="#" className="menu-item">
              About Us
            </a>
            <a href="#" className="menu-item">
              Contact Us
            </a>
          </div>
        </nav>
        {/* matn */}
        <section>
          <h4>Best Quality Plants</h4>
          <h2>
            Amazing Variety
            <br />
            Of Plants Starting
            <br />
            Just $12
          </h2>
          <button className="button1">SHOP NOW</button>
        </section>
      </div>
    </section>
  );
}
