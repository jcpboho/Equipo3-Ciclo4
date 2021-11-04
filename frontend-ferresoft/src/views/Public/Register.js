

//Importamos el logo de la empresa
import logo from "../../assets/img/logo.svg";
//Importamos el componente navbar para mostrar los enlaces de navegación
import { Link } from "react-router-dom";
const Register = () => (
    <>
        <main className="form-signin text-center">
            <form >
                <img className="mb-4" src={logo} alt="" width="72" />
                <h1 className="h3 mb-3 fw-normal">Registro de usuario</h1>

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
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Registrar usuario
                </button>

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
    </>
);

//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
export default Register;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */