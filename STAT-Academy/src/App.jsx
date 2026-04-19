import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Proveedores from "./pages/Proveedores";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  );
}

export default App;