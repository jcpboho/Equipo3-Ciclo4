import "../../assets/css/admin/dashboard.css";
import * as Icon from 'react-feather';
import Nav from "components/Admin/Nav";
import Header from "components/Admin/Header";
import CardDash from "components/Admin/CardDash";
import axios from "axios";
/* import Modal from "components/Admin/ModalProduct"; */
import { useEffect, useState } from "react";

const Dashboard = () => {
    /* const [product, setProduct] = useState([]); */
    const [countProducts, setCountProducts] = useState(0);
    const [countUsers, setCountUsers] = useState(0);
    const [countTotal, setCountTotal] = useState(0);
    const [countOrders, setCountOrders] = useState(0);

    /* const handleGuardar = (e) => {
        e.preventDefault();
        console.log("Guardar");
    }
    const handleEditar = (e) => {
        e.preventDefault();
        console.log("Editar");
    } */

    const getCountProducts = async () => {
        const response = await axios.get("http://localhost:4000/api/product/count");
        if (response.status === 200) {
            setCountProducts(response.data.params.count);
        }
    }
    const getCountUsers = async () => {
        const response = await axios.get("http://localhost:4000/api/user/count");
        if (response.status === 200) {
            setCountUsers(response.data.params.count);
        }
    }
    const getCountTotal = async () => {
        const response = await axios.get("http://localhost:4000/api/product/total");
        if (response.status === 200) {
            setCountTotal(response.data.params.total);
        }
    }
    const getCountOrders = async () => {
        const response = await axios.get("http://localhost:4000/api/order/today");
        if (response.status === 200) {
            setCountOrders(response.data.params.count);
        }
    }


    useEffect((e) => {
        getCountProducts();
        getCountUsers();
        getCountTotal();
        getCountOrders();
        /* getCountUsers();
        getCountP(); */
    }, []);
    return (
        <div className="dashboard">
            <Header />

            <div className="container-fluid">
                <div className="row">

                    <Nav />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="modal" data-bs-target="#modalCreate">
                                    <Icon.Calendar witdh="24" heigth="24" className="mr-2 feather" />
                                    Crear Producto
                                </button>
                            </div>
                        </div>
                        <div className="row">

                            <CardDash title="Productos" textClass="text-primary" icon="FileText" body={countProducts} />
                            <CardDash title="Total Inventario" textClass="text-warning" icon="CreditCard" body={" $" + countTotal} />
                            <CardDash title="Usuarios" textClass="text-success" icon="User" body={countUsers} />
                            <CardDash title="Pedidos" textClass="text-info" icon="ShoppingCart" body={countOrders} />

                        </div>
                    </main>
                </div>
            </div>

            {/* <Modal id="modalCreate" title="Crear Producto" handleAction={handleGuardar} btnSave="Guardar" />

            <Modal id="modalEdit" title="Editar Producto" handleAction={handleEditar} btnSave="Editar" />

            <Modal id="modalDelete" title="Eliminar Producto" handleAction={handleEditar} btnSave="Eliminar" /> */}

        </div>);
};

//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
export default Dashboard;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */