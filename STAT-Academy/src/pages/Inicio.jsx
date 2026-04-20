import { useState } from "react";
import Layout from "../components/Layout";
import Carousel from "../components/carousel";
import "../App.css";

function Inicio() {

    return (
        <Layout>
            <div className="blog-container">
                <h1>Bienvenido a STAT ACADEMY</h1>
                <div className="blog-list">
                    <div className="inicio-card">
                        <h3>Acerca de Nosotros</h3>
                        <p>
                            STAT Medical Costa Rica nace tras la creciente necesidad de capacitación en Primeros Auxilios así como equipamiento para la atención de emergencias.
                            Nuestro lema "Prepararse, Equiparse, Enfrentar" nos lleva en tres pasos a formar personas de manera práctica, facilitar el equipamiento idóneo de manera asequible,
                            permitiéndoles hacer frente a una emergencia con la seguridad necesaria para alcanzar el éxito en cada situación. Hemos evolucionado, ofreciendo ahora entrenamiento
                            con cuerdas, aguas, primeros auxilios en áreas remotas (WFR), STOP THE BLEED, entre otras.
                        </p>
                        <Carousel />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Inicio;