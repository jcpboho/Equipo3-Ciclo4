
//Importamos el componente navbar para mostrar los enlaces de navegación
import NavBar from "../../components/NavBar";

import "../../assets/css/contact.css"
const Contact = () => (
    <>
        {/* Utilizamos el componente navbar el cual tiene los enlaces de navegación */}
        <NavBar />
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto"></header>

            <main className="px-3">
                <h1>Contactenos</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the
                    text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                    <a href="#s" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                </p>
            </main>

            <footer className="mt-auto text-white-50">
            </footer>
        </div>
    </>
);

//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
export default Contact;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */