import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Pago({ carrito, setCarrito, facturas, setFacturas }) {

  const navigate = useNavigate();

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const confirmarPago = () => {

    const nuevaFactura = {
      id: Date.now(),
      total: total,
      fecha: new Date().toLocaleDateString(),
      estado: "Pagado"
    };

    setFacturas([...facturas, nuevaFactura]);
    setCarrito([]);

    navigate("/facturas");
  };

  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Pago</h1>
        </div>

        <h3>Total a pagar: ${total}</h3>

        <div className="usuarios-filtros">
          <h3>Datos del cliente</h3>

          <input type="text" placeholder="Nombre completo" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="text" placeholder="Teléfono" />
        </div>

        <div className="usuarios-filtros">
          <h3>Información de pago</h3>

          <input type="text" placeholder="Nombre en la tarjeta" />
          <input type="text" placeholder="Número de tarjeta" />

          <div style={{ display: "flex", gap: "10px" }}>
            <input type="text" placeholder="MM/AA" />
            <input type="text" placeholder="CVV" />
          </div>

          <select>
            <option>Método de pago</option>
            <option>Tarjeta de crédito</option>
            <option>Tarjeta de débito</option>
            <option>Sinpe Móvil</option>
          </select>
        </div>

        <div className="usuarios-filtros">
          <h3>Resumen</h3>

          {carrito.map((p, i) => (
            <p key={i}>
              {p.nombre} - ${p.precio}
            </p>
          ))}

          <h2>Total: ${total}</h2>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button className="btn-primary" onClick={confirmarPago}>
            Confirmar pago
          </button>
        </div>

      </div>
    </Layout>
  );
}

export default Pago;