
//Importamos el logo de la empresa
import logo from "../../assets/img/logo.svg";
//Importamos link para definir la ruta de ir al login
import { Link } from "react-router-dom";
//Importamos el estilo para el login
import "../../assets/css/login.css";

const Login = () => (
    <main className="form-signin text-center">
        <form >
            <img className="mb-4" src={logo} alt="" width="72" />
            <h1 className="h3 mb-3 fw-normal">Favor Inicie sesión</h1>

            <div className="form-floating">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="usuario.email"
                />
                <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="usuario.password"
                />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" />
                    Recordar
                </label>
            </div>

            <Link className="w-100 btn btn-lg btn-primary" to="/dashboard">
                Iniciar sesión</Link>
            {/* <button className="w-100 btn btn-lg btn-primary" type="submit">
                Iniciar sesión
            </button> */}

            {/* <!-- <router-link className="w-100 btn btn-lg btn-primary" to="/admin"
            >Iniciar sesión</router-link
        > --> */}
            <p className="mt-3 mb-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>

        <Link className="w-100 btn btn-lg btn-danger" to="/">Volver a inicio</Link>
        {/* <router-link className="w-100 btn btn-lg btn-danger" to="/">
        Volver a Inicio
        </router-link> */}
        {/* {{ usuario }} */}
    </main>
);


//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
export default Login;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */