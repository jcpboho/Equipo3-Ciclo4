import React from "react";
const About = () => (
    <div className="App">
        <h1>About</h1>
    </div>    
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