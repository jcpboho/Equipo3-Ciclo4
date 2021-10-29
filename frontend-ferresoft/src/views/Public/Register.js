import React from "react";
import { Link } from "react-router-dom";
const Register = () => (
    <>
        <h1>Register</h1>
        <Link className="w-100 btn btn-lg btn-danger" to="/">Volver a inicio</Link>
    </>
);

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