// import logo from './assets/img/logo.svg';

/* Se importa el archivo index de la carpeta routes */
import Routes from './routes';
/* Se importa el framework bootstrap para lo estilos de la pagina */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:4000/api"


function App() {
  return (
    <>
      {/* Componente para definir las rutas de la aplicación  */}

      {/* Button red */}

      <Routes />
    </>
  );
}

/* Se exporta el modulo para que sea llamado desde el archivo index.js */
export default App;
