import { useState } from "react";
import Layout from "../components/Layout";
import "../App.css";

function Inicio() {

    return (
        <Layout>
            <div className="inicio-container">
                <h1>Bienvenido a STAT ACADEMY</h1>
                <p>
                    En STAT ACADEMY, nos dedicamos a ofrecer soluciones innovadoras en el ámbito de la salud.
                    Nuestro objetivo es mejorar la calidad de vida de las personas a través de la tecnología y la educación.
                </p>
            </div>
        </Layout>
    );
}

export default Inicio;