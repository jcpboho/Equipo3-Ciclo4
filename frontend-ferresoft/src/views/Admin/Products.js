import Header from "components/Admin/Header";
import Modal from "components/Admin/ModalProduct";
import Nav from "components/Admin/Nav";
import { useState } from "react";
import * as Icon from 'react-feather';

const initialStateProduct = {
    nombre: "", descripcion: "", precio_compra: "",
    precio_venta: "", categoria: "", imagen: "", stock: ""
};

const Products = () => {
    const [product, setProduct] = useState(initialStateProduct);

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
                            className="d-flex justify-content-between flex-wrap 
                            flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Products</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="modal" data-bs-target="#modalCreate"
                                    onClick={() => setProduct(initialStateProduct)} >
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
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-outline-primary mx-1"
                                                data-bs-toggle="modal" data-bs-target="#modalEdit"
                                                onClick={() => setProduct({
                                                    nombre: "Cocacola", descripcion: "Gaseosa Azucarada", precio_compra: "1200",
                                                    precio_venta: "1700", categoria: "Bebidas", imagen: "none", stock: "10"
                                                })} >
                                                <Icon.Calendar witdh="24" heigth="24" className="mr-2 feather" />
                                                Editar
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-danger mx-1"
                                                data-bs-toggle="modal" data-bs-target="#modalDelete"
                                                onClick={() => setProduct({
                                                    nombre: "Cocacola", descripcion: "Gaseosa Azucarada", precio_compra: "1200",
                                                    precio_venta: "1700", categoria: "Bebidas", imagen: "none", stock: "10"
                                                })}>
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

            <Modal id="modalCreate" title="Crear Producto"
                handleAction={handleGuardar} btnSave="Guardar"
                producto={product} setProduct={setProduct} />

            <Modal id="modalEdit" title="Editar Producto"
                handleAction={handleEditar} btnSave="Editar"
                producto={product} setProduct={setProduct} />

            <Modal id="modalDelete" title="Eliminar Producto"
                handleAction={handleEditar} btnSave="Eliminar"
                producto={product} setProduct={setProduct} />

        </div>
    )
}

export default Products;