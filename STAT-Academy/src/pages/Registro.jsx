import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    console.log(form);

    navigate("/"); 
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Registro</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <div className="login-actions">
            <button 
              type="button" 
              className="btn-secundario"
              onClick={handleCancel}
            >
              Cancelar
            </button>

            <button 
              type="submit" 
              className="btn-primary"
            >
              Registrarse
            </button>
          </div>

        </form>

        <p className="login-register">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>

      </div>
    </div>
  );
}

export default Registro;