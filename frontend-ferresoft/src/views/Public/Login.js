
//Importamos el logo de la empresa
import logo from "../../assets/img/logo.svg";
//Importamos link para definir la ruta de ir al login
import { Link } from "react-router-dom";
//Importamos el estilo para el login
import "../../assets/css/login.css";
//state router
import { useState, useEffect } from "react";
//importar axios
import axios from "axios";
//importar redirect
import { Redirect } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);

    useEffect(() => {
        async function verifyToken() {
            //Verificamos si existe un token en el localStorage
            if (localStorage.getItem("token")) {
                try {
                    const res = await axios.get("http://localhost:4000/api/auth/verify", {
                        headers: {
                            Authorization: `${localStorage.getItem("token")}`
                        }
                    })
                    if (res.data.params.signin) {
                        setToken(localStorage.getItem("token"));
                    }
                } catch (error) {
                    localStorage.removeItem("token");
                    setToken(null);
                }
            }
        }
        verifyToken();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/api/auth/login", {
            email,
            password
        });
        if (res.data.params.signin) {
            setToken(res.data.params.token);
            localStorage.setItem("token", res.data.params.token);
        }
    }

    return (
        < main className="form-signin text-center" >
            {token ? <Redirect to="/admin/dashboard" /> : null}

            <form onSubmit={handleLogin} >
                <img className="mb-4" src={logo} alt="" width="72" />
                <h1 className="h3 mb-3 fw-normal">Favor Inicie sesión</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" />
                        Recordar
                    </label>
                </div>

                {/* <Link className="w-100 btn btn-lg btn-primary" to="/admin/dashboard">
                    Iniciar sesión</Link> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Iniciar sesión
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
        </main >
    );
};


//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
/* export default Login; */
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */