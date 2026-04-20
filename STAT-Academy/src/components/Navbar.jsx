import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { User, ShoppingCart } from "lucide-react";
import "../App.css";
import logo from "../assets/logo_noBG.png";

function Navbar({ carrito }) {

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">

      {/* IZQUIERDA */}
      <Link to="/" className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>

      {/* DERECHA */}
      <div className="navbar-links">

        {/* GENERALES */}
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/blog" className="navbar-link">Blog</Link>
        <Link to="/proveedores" className="navbar-link">Proveedores</Link>
        <Link to="/usuarios" className="navbar-link">Usuarios</Link>

        {/* TIENDA */}
        <Link to="/productos" className="navbar-link">Productos</Link>
        <Link to="/Carrito" className="navbar-link">Carrito</Link>
        <Link to="/facturas" className="navbar-link">Facturas</Link>

       

        {/* PERFIL */}
        <div className="profile-menu" ref={menuRef}>
          <User
            size={26}
            className="profile-icon"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="dropdown">
              <Link to="/login">Login</Link>
              <Link to="/registro">Registro</Link>
              <Link to="/perfil">Perfil</Link>
              <Link to="/cerrar-sesion">Cerrar Sesión</Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;