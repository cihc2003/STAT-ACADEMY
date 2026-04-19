import Layout from "../components/Layout";
import "../App.css";
import img1 from "../assets/corazon.jpg";
import img2 from "../assets/Salud_preventiva.jpg";
import img3 from "../assets/Tecnologia_medica.jpg";

function Blog() {
  return (
     <Layout>
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>

      <div className="blog-list">

        <div className="blog-card">
          <h3>Avances en Cardiología</h3>
          <p>
            En los últimos años, la cardiología ha experimentado avances significativos
            gracias a la incorporación de nuevas tecnologías y tratamientos innovadores.
            Desde dispositivos de monitoreo en tiempo real hasta procedimientos menos
            invasivos, los pacientes ahora tienen mayores probabilidades de recuperación
            y una mejor calidad de vida. Estos avances también permiten a los especialistas
            detectar enfermedades de forma más temprana y precisa.
          </p>
          <img src={img1} alt="Cardiología" className="blog-image" />
          <div className="card-footer">
  <button className="btn-primary">Leer más</button>
          </div>
        </div>

        <div className="blog-card">
          <h3>Tecnología Médica</h3>
          <p>
              La tecnología médica continúa evolucionando a un ritmo acelerado, transformando
              la manera en que se diagnostican y tratan las enfermedades. Equipos de última
              generación, inteligencia artificial y análisis de datos están permitiendo
              diagnósticos más rápidos y exactos. Esto no solo mejora la eficiencia de los
              centros de salud, sino que también reduce los riesgos para los pacientes.
          </p>
          <img src={img2} alt="Tech" className="blog-image" />
            <div className="card-footer">
              <button className="btn-primary">Leer más</button>
            </div>
        </div>

        <div className="blog-card">
          <h3>Salud Preventiva</h3>
          <p>
              La salud preventiva juega un papel fundamental en el bienestar general de las
              personas. Adoptar hábitos saludables como una alimentación balanceada,
              actividad física regular y chequeos médicos periódicos puede marcar una gran
              diferencia a largo plazo. La prevención no solo ayuda a evitar enfermedades,
              sino que también contribuye a una vida más activa y plena.
          </p>
          <img src={img3} alt="prev" className="blog-image" />
            <div className="card-footer">
            <button className="btn-primary">Leer más</button>
            </div>
        </div>

      </div>
    </div>
    </Layout>
  );
}
export default Blog;