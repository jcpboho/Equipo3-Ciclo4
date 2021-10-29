//Usamos link para definir etiquetas con las que el usuario pueda navegar entre las páginas
import { Link } from "react-router-dom";
//Importamos el logo de la empresa
import logo from "../assets/img/logo.svg";

const Nav = () => (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="" src={logo} alt="" width="23" /> FerreSoft</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Acerca de</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link to="/login" className="btn btn-outline-success">Iniciar Sesión</Link>
                    </form>
                    <form className="d-flex">
                        <Link to="/register" className="btn btn-outline-success">Register</Link>
                    </form>
                </div>
            </div>
        </nav>
    </header>

);
//Exportamos el componente para ser llamado desde cualquier vista
export default Nav;

/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */