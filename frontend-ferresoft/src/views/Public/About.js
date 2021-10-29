import React from "react";
import NavBar from "../../components/NavBar";
const About = () => (
    <>
        <NavBar />
        <h1>About</h1>
    </>
);

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