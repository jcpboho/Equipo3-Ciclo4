
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Product from './Product';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    About,
    Contact,
    Home,
    Login,
    Register,
    Product
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