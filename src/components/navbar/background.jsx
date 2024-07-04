import "./background.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 🐎🐎🐎🐎
import { NavLink } from "react-router-dom";

// (╯°□°）╯︵ ┻━┻
import { useSelector } from "react-redux";

export default function Background() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // (*/ω＼*)
  
  const price = useSelector(({ shopping }) => {
    return shopping.reduce((acc, item) => {
   const total   = parseFloat(item.price)
      return acc + total;
    },0 );
  });
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
            <NavLink to={"/"} className="menu-item home">
              Home
            </NavLink>
            <a href="#" className="menu-item">
              About Us
            </a>
            <a href="#" className="menu-item">
              Contact Us
            </a>
            <NavLink to={"/PurchaseTable"} className="menu-item">
              <div>
                 ${price}
                {/* {console.log(price)} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </div>
            </NavLink>
          </div>
        </nav>
        {/* matn */}
        <section>
          <h4>Best Quality Plants</h4>
          <h2>
            Amazing Variety
            <br className="br1" />
            Of Plants Starting
            <br className="br2" />
            Just $12
          </h2>
          <button className="button1">SHOP NOW</button>
        </section>
      </div>
    </section>
  );
}
