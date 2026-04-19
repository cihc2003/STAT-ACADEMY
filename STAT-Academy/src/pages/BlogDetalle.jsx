import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import "../App.css";
import img1 from "../assets/corazon.jpg";

function BlogDetalle() {
  const { id } = useParams();

  return (
<Layout>

    <div className="detalle-container">

      {/* HERO */}
      <div className="detalle-hero">
        <h1>Avances en Cardiología</h1>
        <p className="detalle-subtitle">
          Innovación médica y tecnología aplicada a la salud del corazón
        </p>
      </div>

      {/* IMAGEN */}
      <div className="detalle-image-container">
        <img src={img1} alt="Cardiología" className="detalle-image" />
      </div>

      {/* CONTENIDO */}
      <div className="detalle-content">
        <p>
          En los últimos años, la cardiología ha experimentado avances significativos
          gracias a la incorporación de nuevas tecnologías y tratamientos innovadores.
        </p>

        <p>
          Desde dispositivos de monitoreo en tiempo real hasta procedimientos menos
          invasivos, los pacientes ahora tienen mayores probabilidades de recuperación
          y una mejor calidad de vida.
        </p>

        <p>
          Estos avances también permiten a los especialistas detectar enfermedades de
          forma más temprana y precisa, lo que reduce riesgos y mejora el pronóstico
          general del paciente.
        </p>

        <blockquote>
          “La tecnología médica está redefiniendo la forma en que salvamos vidas.”
        </blockquote>

        <p>
          La integración de inteligencia artificial y análisis de datos clínicos
          está marcando una nueva era en la medicina moderna.
        </p>
      </div>

      {/* FOOTER INFO */}
      <div className="detalle-footer">
        <p>🩺 Categoría: Cardiología</p>
      </div>

    </div>
    </Layout>
  );
}

export default BlogDetalle;