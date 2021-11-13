//Usamos link para definir etiquetas con las que el usuario pueda navegar entre las páginas
import { NavLink } from "react-router-dom";
//Importamos el logo de la empresa
import logo from "../assets/img/logo.svg";

const Nav = () => (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <NavLink activeClassName="active" className="navbar-brand" to="/"><img className="" src={logo} alt="" width="23" /> FerreSoft</NavLink>
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
                            <NavLink activeClassName="active" exact to="/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/products" className="nav-link">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/about" className="nav-link">Acerca de</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/contact" className="nav-link">Contacto</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <NavLink activeClassName="active" to="/login" className="btn btn-outline-success">Iniciar Sesión</NavLink>
                    </form>
                    <form className="d-flex">
                        <NavLink activeClassName="active" to="/register" className="btn btn-outline-success">Register</NavLink>
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