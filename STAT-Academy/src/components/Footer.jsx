import "../App.css";
import logo from "../assets/logo.png";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo */}
        <div className="footer-section">
          <img src={logo} alt="STAT Academy Logo" className="footer-logo" />
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <div className="footer-line"></div>

          <p className="footer-email">
            <Mail size={12} style={{ marginRight: "5px" }} />
            info@statmedicalcr.com
          </p>

          <div className="footer-socials">
            <p>
                <a href="https://www.facebook.com/STATMedCR" target="_blank" rel="noopener noreferrer"> Facebook </a> <br />
                <a href="https://www.instagram.com/statmedicalcr" target="_blank" rel="noopener noreferrer"> Instagram </a> <br />
                <a href="https://www.youtube.com/@statmedicalcostarica2104" target="_blank" rel="noopener noreferrer"> YouTube </a>
            </p>
          </div>

        </div>

      </div>

      <p className="footer-copy">
        STAT Medical Costa Rica &copy; 2026. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;