import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-card">

                <h2>Iniciar Sesión</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        required
                    />

                    <div className="login-links">
                        <Link to="/">¿Olvidaste tu contraseña?</Link>
                    </div>

                    <div className="login-actions">
                        <button
                            type="button"
                            className="btn-secundario"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="btn-primary"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="login-register">
                    ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
                </p>

            </div>
        </div>
    );
}

export default Login;