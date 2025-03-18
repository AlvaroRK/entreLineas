import "./NavBar.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        {!isDesktop && (
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? "icon close" : "icon"}></span>
          </button>
        )}
        <h1 className="logo">Entre Lineas</h1>
        <ul className={`menu ${isOpen || isDesktop ? "open" : ""}`}>
          <Link className="listItem" to="/">
            <span>Home</span>
          </Link>
          <Link className="listItem" to="/catalog">
            Catalog
          </Link>
          <Link className="listItem" to="/cart">
            Cart
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;