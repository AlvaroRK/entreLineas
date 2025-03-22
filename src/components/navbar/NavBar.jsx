import "./NavBar.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { user, logout } = useAuth();

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
            Home
          </Link>
          <Link className="listItem" to="/catalog">
            Catalog
          </Link>
          <Link className="listItem" to="/about">
            About us
          </Link>
          {user ? (
            <button className="listItem" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link className="listItem" to="/login">
              Login
            </Link>
          )}
        </ul>

        <Link className="cart" to={"/cart"}>
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-2 text-xs">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
