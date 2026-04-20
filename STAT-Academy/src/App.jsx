import { useState } from "react";
import "./App.css";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  const modulosCurso = [
    {
      id: 1,
      titulo: "Objetivos del curso",
      contenido: [
        "Comprender la anatomía y fisiología básica del corazón.",
        "Reconocer las principales patologías cardiovasculares.",
        "Relacionar conceptos teóricos con situaciones clínicas.",
      ],
    },
    {
      id: 2,
      titulo: "Fisiología cardiovascular",
      subtitulo: "El ciclo cardíaco",
      descripcion:
        "El funcionamiento cardíaco se entiende a partir de las fases de sístole y diástole, fundamentales para el bombeo eficiente de la sangre.",
      enlace: "Ver contenido complementario",
    },
    {
      id: 3,
      titulo: "Evaluación y cuestionarios",
      descripcion:
        "Realiza los cuestionarios del módulo para validar los conocimientos adquiridos en el curso.",
    },
  ];

  const recursos = [
    "Material de lectura",
    "Presentaciones",
    "Casos clínicos",
    "Foro de discusión",
  ];

  const enlacesUtiles = ["Guías de cardiología", "Biblioteca médica"];

  const cursos = [
    {
      id: 1,
      nombre: "Introducción a la Cardiología",
      progreso: "25%",
      estado: "En progreso",
    },
    {
      id: 2,
      nombre: "Soporte Vital Básico",
      progreso: "70%",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Electrocardiografía Inicial",
      progreso: "10%",
      estado: "Inicio",
    },
  ];

  const materiales = [
    {
      id: 1,
      titulo: "Manual introductorio de cardiología",
      tipo: "PDF",
      descripcion: "Documento base con conceptos anatómicos y fisiológicos.",
    },
    {
      id: 2,
      titulo: "Presentación del sistema cardiovascular",
      tipo: "PPT",
      descripcion: "Resumen visual del contenido principal del módulo.",
    },
    {
      id: 3,
      titulo: "Caso clínico guiado",
      tipo: "Recurso interactivo",
      descripcion: "Análisis práctico de síntomas y signos cardiovasculares.",
    },
  ];

  const estudiantes = [
    { id: 1, nombre: "Juan Pérez", curso: "Introducción a la Cardiología" },
    { id: 2, nombre: "María López", curso: "Soporte Vital Básico" },
    { id: 3, nombre: "Carlos Ruiz", curso: "Electrocardiografía Inicial" },
    { id: 4, nombre: "Ana Solano", curso: "Introducción a la Cardiología" },
  ];

  const tareas = [
    {
      id: 1,
      nombre: "Cuestionario de anatomía cardíaca",
      fecha: "20/04/2026",
      estado: "Pendiente",
    },
    {
      id: 2,
      nombre: "Análisis de caso clínico",
      fecha: "23/04/2026",
      estado: "En revisión",
    },
    {
      id: 3,
      nombre: "Foro sobre fisiología",
      fecha: "25/04/2026",
      estado: "Completada",
    },
  ];

  function renderInicio() {
    return (
      <>
        <section className="hero">
          <div className="hero__info">
            <p className="hero__label">Curso destacado</p>
            <h1>Introducción a la Cardiología</h1>

            <div className="hero__actions">
              <button className="btn btn--primary">Comenzar el curso</button>

              <div className="progress-box">
                <span className="progress-box__label">
                  Progreso del curso: 25% completado
                </span>
                <div className="progress-bar">
                  <div className="progress-bar__fill"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <main className="main-content">
            <section className="card">
              <h2>{modulosCurso[0].titulo}</h2>
              <ul className="objective-list">
                {modulosCurso[0].contenido.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="card">
              <h2>Anatomía del corazón</h2>

              <div className="anatomy-section__text">
                <h3>Descripción general</h3>
                <p>
                  El corazón es el órgano central del sistema circulatorio. En
                  este módulo se estudian sus cavidades, válvulas y el flujo
                  sanguíneo, permitiendo comprender su funcionamiento en
                  condiciones normales y patológicas.
                </p>
                <a href="/">Leer más sobre anatomía cardíaca</a>
              </div>
            </section>

            <section className="card">
              <h2>{modulosCurso[1].titulo}</h2>
              <h3 className="section-subtitle">{modulosCurso[1].subtitulo}</h3>
              <p>{modulosCurso[1].descripcion}</p>
              <a href="/">{modulosCurso[1].enlace}</a>
            </section>

            <section className="card card--center">
              <h2>{modulosCurso[2].titulo}</h2>
              <p>{modulosCurso[2].descripcion}</p>
              <button className="btn btn--primary">Ir a la evaluación</button>
            </section>
          </main>

          <aside className="sidebar">
            <section className="side-card">
              <h3>Recursos del curso</h3>
              <ul className="side-list">
                {recursos.map((recurso, index) => (
                  <li key={index}>{recurso}</li>
                ))}
              </ul>
            </section>

            <section className="side-card">
              <h3>Enlaces útiles</h3>
              <ul className="side-list">
                {enlacesUtiles.map((enlace, index) => (
                  <li key={index}>{enlace}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </>
    );
  }

  function renderCursos() {
    return (
      <section className="section-page">
        <div className="section-header">
          <h1>Mis cursos</h1>
          <p>Listado de cursos activos del estudiante dentro de la plataforma.</p>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Progreso</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso) => (
                <tr key={curso.id}>
                  <td>{curso.nombre}</td>
                  <td>{curso.progreso}</td>
                  <td>{curso.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  function renderRecursos() {
    return (
      <section className="section-page">
        <div className="section-header">
          <h1>Recursos académicos</h1>
          <p>Repositorio de materiales de apoyo asociados al curso.</p>
        </div>

        <div className="resource-grid">
          {materiales.map((material) => (
            <article className="resource-card" key={material.id}>
              <span className="resource-card__tag">{material.tipo}</span>
              <h3>{material.titulo}</h3>
              <p>{material.descripcion}</p>
              <button className="btn btn--secondary">Abrir recurso</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderEstudiantes() {
    return (
      <section className="section-page">
        <div className="section-header">
          <h1>Estudiantes</h1>
          <p>Consulta básica de estudiantes registrados en la plataforma.</p>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Curso asignado</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.id}>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.curso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  function renderTareas() {
    return (
      <section className="section-page">
        <div className="section-header">
          <h1>Tareas</h1>
          <p>Seguimiento general de actividades y entregables del módulo.</p>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {tareas.map((tarea) => (
                <tr key={tarea.id}>
                  <td>{tarea.nombre}</td>
                  <td>{tarea.fecha}</td>
                  <td>{tarea.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  function renderContenido() {
    switch (seccionActiva) {
      case "inicio":
        return renderInicio();
      case "cursos":
        return renderCursos();
      case "recursos":
        return renderRecursos();
      case "estudiantes":
        return renderEstudiantes();
      case "tareas":
        return renderTareas();
      default:
        return renderInicio();
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand__icon">✚</div>
          <span>Curso Médico Online</span>
        </div>

        <nav className="navbar">
          <button
            className={seccionActiva === "inicio" ? "nav-btn active" : "nav-btn"}
            onClick={() => setSeccionActiva("inicio")}
          >
            Inicio
          </button>
          <button
            className={seccionActiva === "cursos" ? "nav-btn active" : "nav-btn"}
            onClick={() => setSeccionActiva("cursos")}
          >
            Mis Cursos
          </button>
          <button
            className={seccionActiva === "recursos" ? "nav-btn active" : "nav-btn"}
            onClick={() => setSeccionActiva("recursos")}
          >
            Recursos
          </button>
          <button
            className={
              seccionActiva === "estudiantes" ? "nav-btn active" : "nav-btn"
            }
            onClick={() => setSeccionActiva("estudiantes")}
          >
            Estudiantes
          </button>
          <button
            className={seccionActiva === "tareas" ? "nav-btn active" : "nav-btn"}
            onClick={() => setSeccionActiva("tareas")}
          >
            Tareas
          </button>
        </nav>

        <div className="user-box">Usuario</div>
      </header>

      {renderContenido()}

      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__section">
            <h3>Curso Médico Online</h3>
            <p>
              Plataforma educativa orientada a la formación en ciencias médicas,
              con acceso a cursos, materiales y evaluaciones.
            </p>
          </div>

          <div className="footer__section">
            <h4>Navegación</h4>
            <ul>
              <li>Inicio</li>
              <li>Mis Cursos</li>
              <li>Recursos</li>
              <li>Tareas</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Soporte</h4>
            <ul>
              <li>Contacto</li>
              <li>Preguntas frecuentes</li>
              <li>Ayuda técnica</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Información</h4>
            <ul>
              <li>Política de privacidad</li>
              <li>Términos de uso</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Plataforma Educativa - Ingeniería en Sistemas</span>
        </div>
      </footer>
    </div>
  );
}

export default App;