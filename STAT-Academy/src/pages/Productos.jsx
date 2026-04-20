import Layout from "../components/Layout";

function Productos({ carrito, setCarrito }) {

  const productos = [
    { id: 1, nombre: "Paracetamol", precio: 5 },
    { id: 2, nombre: "Ibuprofeno", precio: 8 },
    { id: 3, nombre: "Alcohol 70%", precio: 3 },
    { id: 4, nombre: "Mascarillas", precio: 10 }
  ];

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Productos Médicos</h1>
        </div>

        <table className="usuarios-tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>${p.precio}</td>
                <td>
                  <button
                    className="btn-secundario"
                    onClick={() => agregarAlCarrito(p)}
                  >
                    Agregar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </Layout>
  );
}

export default Productos;