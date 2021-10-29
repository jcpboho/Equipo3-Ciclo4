import React from "react";
import NavBar from "../../components/NavBar";
const Product = () => (
    <>
        <NavBar />
        <h1>Product</h1>
    </>
);

export default Product;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */