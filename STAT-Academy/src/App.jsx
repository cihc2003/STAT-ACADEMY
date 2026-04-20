import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Proveedores from "./pages/Proveedores";
import Usuarios from "./pages/Usuarios";
import BlogDetalle from "./pages/BlogDetalle";
import Perfil from "./pages/Perfil";


import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Pago from "./pages/Pago";
import Facturas from "./pages/Facturas";

function App() {

  // 🔹 ESTADO GLOBAL
  const [carrito, setCarrito] = useState([]);
  const [facturas, setFacturas] = useState([]);

  return (
    <Routes>

      {/* 🔹 GENERALES */}
      <Route path="/" element={<Inicio />} />
      <Route path="/cerrar-sesion" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />

      {/* 🔹 AUTENTICACIÓN */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* 🔹 BLOG */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetalle />} />

      {/* 🔹 ADMIN */}
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/usuarios" element={<Usuarios />} />

      {/* 🔹 TIENDA */}
      <Route 
        path="/productos" 
        element={<Productos carrito={carrito} setCarrito={setCarrito} />} 
      />

      <Route 
        path="/carrito" 
        element={<Carrito carrito={carrito} />} 
      />

      <Route 
        path="/pago" 
        element={
          <Pago 
            carrito={carrito}
            setCarrito={setCarrito}
            facturas={facturas}
            setFacturas={setFacturas}
          />
        } 
      />

      <Route 
        path="/facturas" 
        element={<Facturas facturas={facturas} />} 
      />

    </Routes>
  );
}

export default App;