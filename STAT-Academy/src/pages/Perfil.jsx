import { useState } from "react";
import Layout from "../components/Layout";
import "../App.css";

function Perfil() {
  const [editando, setEditando] = useState(false);

  const [usuario, setUsuario] = useState({
    nombre: "Carlos Huete",
    correo: "carlos@email.com"
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const handleGuardar = () => {
    setEditando(false);
    console.log("Datos guardados:", usuario);
  };

  return (
    <Layout>
      <div className="perfil-container">

        <div className="perfil-card">
          <h2>Mi Perfil</h2>

          {/* Nombre */}
          <div className="perfil-field">
            <label>Nombre</label>
            {editando ? (
              <input
                type="text"
                name="nombre"
                value={usuario.nombre}
                onChange={handleChange}
              />
            ) : (
              <p>{usuario.nombre}</p>
            )}
          </div>

          {/* Correo */}
          <div className="perfil-field">
            <label>Correo</label>
            {editando ? (
              <input
                type="email"
                name="correo"
                value={usuario.correo}
                onChange={handleChange}
              />
            ) : (
              <p>{usuario.correo}</p>
            )}
          </div>

          {/* Botones */}
          <div className="perfil-actions">
            {editando ? (
              <>
                <button className="btn-secundario" onClick={() => setEditando(false)}>
                  Cancelar
                </button>

                <button className="btn-primary" onClick={handleGuardar}>
                  Guardar
                </button>
              </>
            ) : (
              <button className="btn-primary" onClick={() => setEditando(true)}>
                Editar Perfil
              </button>
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Perfil;