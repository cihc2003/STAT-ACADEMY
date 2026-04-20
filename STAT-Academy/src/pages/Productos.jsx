import Layout from "../components/Layout";
import paracetamol from "../assets/paracetamol.jpg";
import ibuprofeno from "../assets/ibuprofeno.jpg";
import alcohol from "../assets/alcohol.jpg";
import mascarillas from "../assets/mascarilla.jpg";

function Productos({ carrito, setCarrito }) {

  const productos = [
    { id: 1, nombre: "Paracetamol", precio: 5, img: paracetamol },
    { id: 2, nombre: "Ibuprofeno", precio: 8, img: ibuprofeno },
    { id: 3, nombre: "Alcohol 70%", precio: 3, img: alcohol },
    { id: 4, nombre: "Mascarillas", precio: 10, img: mascarillas }
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
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {productos.map(p => (
              <tr key={p.id}>

                <td>
                  <img
                    src={p.img}
                    alt={p.nombre}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "5px"
                    }}
                  />
                </td>

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