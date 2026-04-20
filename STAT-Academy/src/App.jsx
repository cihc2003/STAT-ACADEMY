import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Proveedores from "./pages/Proveedores";
import Usuarios from "./pages/Usuarios";
import BlogDetalle from "./pages/BlogDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/cerrar-sesion" element={<Inicio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetalle />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default App;