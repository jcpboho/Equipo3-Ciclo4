import React from "react";
import NavBar from "../../components/NavBar";
const Contact = () => (
    <>
        <NavBar />
        <h1>Contact</h1>
    </>
);

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