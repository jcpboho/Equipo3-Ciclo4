import React from "react";
import {Link} from "react-router-dom";
const Nav = () => (
    <div>     
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>    
);

export default Nav;
/* 
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */