import Layout from "../components/Layout";

function Facturas() {
  return (
    <Layout>
      <div className="usuarios-container">

        <div className="usuarios-header">
          <h1>Facturas</h1>
        </div>

        <table className="usuarios-tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#001</td>
              <td>$50</td>
              <td>2026-04-19</td>
            </tr>
          </tbody>
        </table>

      </div>
    </Layout>
  );
}

export default Facturas;