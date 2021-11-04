
//Importamos todas las vistas para luego exportarlas en una sola
import Dashboard from './Dashboard';

//Exportamos todas las vistas en una sola variable, para luego importarla desde routes
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Dashboard
};


/*
Altenativa, usar en los modulos el export siguiente

//En la importacion
import {Home, About, Contact, Login, Register } from '../views/Public';

//En el modulo
export {Home}

//En el index.js
module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */



/*
Altenativa

// in index.js
export {default as Button} from "../components/Button/Button"
export {default as Header} from "../components/Header/Header"

//in App.js
import {Button, Header} from "../components" */