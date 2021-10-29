//Importamos en navbar el cual tiene los enlaces de navegacion
import NavBar from "../../components/NavBar";
const About = () => (
    <>
        {/* Utilizamos el componente navbar el cual tiene los enlaces de navegación */}
        <NavBar />
        <h1>About</h1>
    </>
);

//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
export default About;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */