
//Importamos el componente navbar para mostrar los enlaces de navegación
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import * as Icon from 'react-feather';
axios.defaults.baseURL = "http://localhost:4000/api"
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

const Product = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const products = await axios.get("/product/")
        if (products.data.length > 0) {
            setProducts(products.data);
        }
    }

    useEffect(() => {
        console.log("Productos");
        getProducts();
    }, []);
    return (
        <>
            {/* Utilizamos el componente navbar el cual tiene los enlaces de navegación */}
            <NavBar />
            <div className="container  mt-5">
                <div className="album py-5 bg-light ">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {products.map((item, index) => (

                                <div className="col" key={item._id}>
                                    <div className="card shadow-sm">
                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                            <title>{item.name}</title>
                                            <img srcSet={item.image} alt="Thumbnail" />
                                        </svg>

                                        <div className="card-body">
                                            <p className="card-text">{item.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">Disponible: {item.stock}</small>
                                                <small className="text-muted">Precio: {item.priceSale}</small>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                                        <Icon.Eye witdh="24" heigth="24" className="mr-2 feather" />
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                                        <Icon.DollarSign witdh="24" heigth="24" className="mr-2 feather" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>)
};

//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
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