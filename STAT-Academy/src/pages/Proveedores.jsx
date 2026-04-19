import { useState } from "react";
import Layout from "../components/Layout";
import "../App.css";

function Proveedores() {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [proveedorActual, setProveedorActual] = useState({
    nombre: "",
    contacto: "",
    telefono: "",
    estado: ""
  });

  const abrirAgregar = () => {
    setModoEdicion(false);
    setProveedorActual({
      nombre: "",
      contacto: "",
      telefono: "",
      estado: ""
    });
    setMostrarModal(true);
  };

  const abrirEditar = (proveedor) => {
    setModoEdicion(true);
    setProveedorActual(proveedor);
    setMostrarModal(true);
  };

  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Proveedores</h1>
          <button className="btn-primary" onClick={abrirAgregar}>
            + Agregar proveedor
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
        </div>

        {/* TABLA */}

        <table className="usuarios-tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            
              <tr>
                <td>MedSupply CR</td>
                <td>Juan Pérez</td>
                <td>8888-9999</td>
                <td>Activo</td>
                <td>
                  <button
                    className="btn-secundario"
                     onClick={() =>
                    abrirEditar({
                      nombre: "MedSupply CR",
                      contacto: "Juan Pérez",
                      telefono: "8888-9999",
                      estado: "Activo"
                    })
                  }
                  >
                    Editar
                  </button>
                </td>
              </tr>
        
        <tr>
                <td>TechMed Solutions</td>
                <td>Laura Gómez</td>
                <td>7777-1234</td>
                <td>Inactivo</td>
                <td>
                  <button
                    className="btn-secundario"
                     onClick={() =>
                    abrirEditar({
                      nombre: "TechMed Solutions",
                      contacto: "Laura Gómez",
                      telefono: "7777-1234",
                      estado: "Inactivo"
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
          <div className="modal-overlay" >
            <div className="modal">

              <h2>
                {modoEdicion ? "Editar proveedor" : "Agregar proveedor"}
              </h2>

              <input
                type="text"
                placeholder="Nombre"
                value={proveedorActual.nombre}
                onChange={(e) =>
                  setProveedorActual({
                    ...proveedorActual,
                    nombre: e.target.value
                  })
                }
              />

              <input
                type="text"
                placeholder="Contacto"
                value={proveedorActual.contacto}
                onChange={(e) =>
                  setProveedorActual({
                    ...proveedorActual,
                    contacto: e.target.value
                  })
                }
              />

              <input
                type="text"
                placeholder="Teléfono"
                value={proveedorActual.telefono}
                onChange={(e) =>
                  setProveedorActual({
                    ...proveedorActual,
                    telefono: e.target.value
                  })
                }
              />

              <select
                value={proveedorActual.estado}
                onChange={(e) =>
                  setProveedorActual({
                    ...proveedorActual,
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

                <button className="btn-primary" >
                  {modoEdicion ? "Guardar cambios" : "Crear proveedor"}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

export default Proveedores;