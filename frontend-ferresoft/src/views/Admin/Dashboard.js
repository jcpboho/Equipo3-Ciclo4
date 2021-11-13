import "../../assets/css/admin/dashboard.css";
import * as Icon from 'react-feather';
import Nav from "components/Admin/Nav";
import Header from "components/Admin/Header";
import Modal from "components/Admin/ModalProduct";
import { useState } from "react";

const Dashboard = () => {
    const [product, setProduct] = useState([]);

    const handleGuardar = (e) => {
        e.preventDefault();
        console.log("Guardar");
    }
    const handleEditar = (e) => {
        e.preventDefault();
        console.log("Editar");
    }
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
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-outline-primary mx-1"
                                                data-bs-toggle="modal" data-bs-target="#modalEdit">
                                                <Icon.Calendar witdh="24" heigth="24" className="mr-2 feather" />
                                                Editar
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-danger mx-1"
                                                data-bs-toggle="modal" data-bs-target="#modalDelete">
                                                <Icon.Calendar witdh="24" heigth="24" className="mr-2 feather" />
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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