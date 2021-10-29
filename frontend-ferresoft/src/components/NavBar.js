import React from "react";
import {Link} from "react-router-dom";
const Nav = () => (
    <div>
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img className="" src="@/assets/img/logo.svg" alt="" width="20" />
                FerreSoft</Link>
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
                    <Link to="/about" className="nav-link">Acerca de</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contacto</Link>
                </li>
                </ul>
                <form className="d-flex">
                    <Link to="/login"className="btn btn-outline-success">Iniciar Sesión</Link>
                </form>
            </div>
            </div>
        </nav>
        </header>
        <div>     
            <Link to="/register" className="btn btn-success btn-sm">Register</Link>
        </div>    
    </div>
    
);

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