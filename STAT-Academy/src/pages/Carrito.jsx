import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Carrito({ carrito }) {

  const navigate = useNavigate();

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Carrito</h1>
        </div>

        <table className="usuarios-tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {carrito.map((p, i) => (
              <tr key={i}>
                <td>{p.nombre}</td>
                <td>${p.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Total: ${total}</h3>

        <button
          className="btn-primary"
          onClick={() => navigate("/pago")}
        >
          Ir a pagar
        </button>

      </div>
    </Layout>
  );
}

export default Carrito;