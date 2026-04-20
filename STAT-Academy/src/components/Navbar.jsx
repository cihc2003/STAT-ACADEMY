import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo_noBG.png";

function Navbar() {
  return (
    <nav className="navbar">

      {/* IZQUIERDA: logo + nombre */}
      <Link to="/" className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>

      {/* DERECHA: links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/blog" className="navbar-link">Blog</Link>
        <Link to="/proveedores" className="navbar-link">Proveedores</Link>
        <Link to="/usuarios" className="navbar-link">Usuarios</Link>
        <Link to="/productos" className="navbar-link">Productos</Link>
        <Link to="/carrito" className="navbar-link">Carrito</Link>
        <Link to="/pago" className="navbar-link">Pago</Link>
        <Link to="/facturas" className="navbar-link">Facturas</Link>
      </div>

    </nav>
  );
}

export default Navbar;