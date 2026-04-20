import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Blog from "./pages/Blog";
import Proveedores from "./pages/Proveedores";
import Usuarios from "./pages/Usuarios";
import BlogDetalle from "./pages/BlogDetalle";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Pago from "./pages/Pago";
import Facturas from "./pages/Facturas";

function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetalle />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/usuarios" element={<Usuarios />} />

      {/* 👇 IMPORTANTE */}
      <Route path="/productos" element={
        <Productos carrito={carrito} setCarrito={setCarrito} />
      } />

      <Route path="/carrito" element={
        <Carrito carrito={carrito} />
      } />

      <Route path="/pago" element={
        <Pago carrito={carrito} />
      } />

      <Route path="/facturas" element={<Facturas />} />
    </Routes>
  );
}

export default App;