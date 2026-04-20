import { useState } from "react";
import Layout from "../components/Layout";

function Facturas({ facturas }) {

  const [busqueda, setBusqueda] = useState("");
  const [clienteFiltro, setClienteFiltro] = useState("");

  const filtradas = facturas.filter(f =>
    f.id.toString().includes(busqueda) &&
    f.cliente?.toLowerCase().includes(clienteFiltro.toLowerCase())
  );

  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Facturas</h1>
        </div>

        {/* FILTROS */}
        <div className="usuarios-filtros">

          <input
            type="text"
            placeholder="Buscar por ID..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <input
            type="text"
            placeholder="Buscar por cliente..."
            value={clienteFiltro}
            onChange={(e) => setClienteFiltro(e.target.value)}
          />

        </div>

        {/* TABLA */}
        <table className="usuarios-tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {filtradas.length > 0 ? (
              filtradas.map(f => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{f.cliente || "Sin nombre"}</td>
                  <td>${f.total}</td>
                  <td>{f.fecha}</td>
                  <td className="activo">{f.estado}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay facturas</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </Layout>
  );
}

export default Facturas;