import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Entre Líneas</h2>
          <p>Tu librería online de confianza.</p>
        </div>
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/catalog">Libros</a>
          <a href="/about">Nosotros</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Entre Líneas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer