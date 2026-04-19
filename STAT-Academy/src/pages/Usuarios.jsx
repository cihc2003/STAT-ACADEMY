import { useState } from "react";
import Layout from "../components/Layout";
import "../App.css";

function Usuarios() {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState({
    nombre: "",
    email: "",
    tipo: "",
    estado: ""
  });

  const abrirAgregar = () => {
    setModoEdicion(false);
    setUsuarioActual({
      nombre: "",
      email: "",
      tipo: "",
      estado: ""
    });
    setMostrarModal(true);
  };

  const abrirEditar = (usuario) => {
    setModoEdicion(true);
    setUsuarioActual(usuario);
    setMostrarModal(true);
  };

  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Usuarios</h1>
          <button className="btn-primary" onClick={abrirAgregar}>
            + Agregar usuario
          </button>
        </div>

          {/* FILTROS */}

        <div className="usuarios-filtros">
          <h4>Filtrar</h4>
          <input type="text" placeholder="Buscar por nombre..." />
          
          <select>
            <option>Estado</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>

          <select>
            <option>Tipo de usuario</option>
            <option>Administrador</option>
            <option>Cliente</option>
            <option>Proveedor</option>
            <option>Profesor</option>
          </select>
        </div>

          {/* TABLA */}

        <table className="usuarios-tabla">
              <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alejandro Porras</td>
              <td>alejandro@email.com</td>
              <td>Administrador</td>
              <td className="activo">Activo</td>
              <td>
                <button
                  className="btn-secundario"
                  onClick={() =>
                    abrirEditar({
                      nombre: "Alejandro Porras",
                      email: "alejandro@email.com",
                      tipo: "Administrador",
                      estado: "Activo"
                    })
                  }
                >
                  Editar
                </button>
              </td>
            </tr>

 <tr>
              <td>Maria Lopez</td>
              <td>mlopez@email.com</td>
              <td>Cliente</td>
              <td className="inactivo">Inactivo</td>
              <td>
                <button
                  className="btn-secundario"
                  onClick={() =>
                    abrirEditar({
                      nombre: "Maria Lopez",
                      email: "mlopez@email.com",
                      tipo: "Cliente",
                      estado: "Inactvo"
                    })
                  }
                >
                  Editar
                </button>
              </td>
            </tr>

             <tr>
              <td>David Castillo</td>
              <td>davidc@email.com</td>
              <td>Profesor</td>
              <td className="activo">Activo</td>
              <td>
                <button
                  className="btn-secundario"
                  onClick={() =>
                    abrirEditar({
                      nombre: "David Castillo",
                      email: "davidc@email.com",
                      tipo: "Profesor",
                      estado: "Activo"
                    })
                  }
                >
                  Editar
                </button>
              </td>
            </tr>

             <tr>
              <td>Jimena Rodriguez</td>
              <td>jimenar@email.com</td>
              <td>Proveedor</td>
              <td className="activo">Activo</td>
              <td>
                <button
                  className="btn-secundario"
                  onClick={() =>
                    abrirEditar({
                      nombre: "Jimena Rodriguez",
                      email: "jimenar@email.com",
                      tipo: "Proveedor",
                      estado: "Activo"
                    })
                  }
                >
                  Editar
                </button>
              </td>
            </tr>





          </tbody>
        </table>

        {/* MODAL */}
        {mostrarModal && (
          <div className="modal-overlay">
            <div className="modal">

              <h2>
                {modoEdicion ? "Editar usuario" : "Agregar usuario"}
              </h2>

              <input
                type="text"
                placeholder="Nombre"
                value={usuarioActual.nombre}
                onChange={(e) =>
                  setUsuarioActual({
                    ...usuarioActual,
                    nombre: e.target.value
                  })
                }
              />

              <input
                type="email"
                placeholder="Email"
                value={usuarioActual.email}
                onChange={(e) =>
                  setUsuarioActual({
                    ...usuarioActual,
                    email: e.target.value
                  })
                }
              />

              <select
                value={usuarioActual.tipo}
                onChange={(e) =>
                  setUsuarioActual({
                    ...usuarioActual,
                    tipo: e.target.value
                  })
                }
              >
                <option value="">Tipo</option>
                <option>Administrador</option>
                <option>Cliente</option>
                <option>Proveedor</option>
                <option>Profesor</option>
              </select>

              <select
                value={usuarioActual.estado}
                onChange={(e) =>
                  setUsuarioActual({
                    ...usuarioActual,
                    estado: e.target.value
                  })
                }
              >
                <option value="">Estado</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>

              <div className="modal-actions">
                <button
                  className="btn-secundario"
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>

                <button className="btn-primary">
                  {modoEdicion ? "Guardar cambios" : "Crear usuario"}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

export default Usuarios;