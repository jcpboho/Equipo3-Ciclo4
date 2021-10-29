
//Importamos el componente navbar para mostrar los enlaces de navegación
import NavBar from "../../components/NavBar";
const Contact = () => (
    <>
        {/* Utilizamos el componente navbar el cual tiene los enlaces de navegación */}
        <NavBar />
        <h1>Contact</h1>
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