import { Link } from "react-router-dom"
import { FaCat, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"  // 👈 nuevos íconos
import logo from '../assets/otros/logo.png' // Logo de Bengapers 
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Bengapers</h2>
      <img src={logo} alt="Logo Bengapers" className="logo" />
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <FaHome className="nav-icon" /> Inicio
        </Link>
        <Link to="/about" className="nav-link">
          <FaInfoCircle className="nav-icon" /> Conocenos
        </Link>
        <Link to="/persa" className="nav-link">
          <FaCat className="nav-icon" /> Persa
        </Link>
        <Link to="/bengali" className="nav-link">
          <FaCat className="nav-icon" /> Bengalí
        </Link>
        <Link to="/contacto" className="nav-link">
    <FaEnvelope className="nav-icon" /> Contacto 
  </Link>
      </div>
    </nav>
  )
}

export default Navbar