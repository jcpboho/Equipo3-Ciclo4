import React from "react";
import {Link} from "react-router-dom";
const Home = () => (
    <div>
        <h1>Home</h1>
    </div>    
);

export default Home;
/* 
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */