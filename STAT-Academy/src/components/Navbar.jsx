import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#112945",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2 style={{ color: "white" }}>STAT Medical</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Inicio</Link>
        <Link to="/blog" style={{ color: "white" }}>Blog</Link>
        <Link to="/proveedores" style={{ color: "white" }}>Proveedores</Link>
        <Link to="/usuarios" style={{ color: "white" }}>Usuarios</Link>
      </div>
    </nav>
  );
}

export default Navbar;