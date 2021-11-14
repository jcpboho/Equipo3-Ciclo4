import Header from "components/Admin/Header";
import Modal from "components/Admin/ModalProduct";
import Nav from "components/Admin/Nav";
import { useEffect } from "react";
import { useState } from "react";
import * as Icon from 'react-feather';
import axios from "axios";

const initialStateProduct = {
    _id: "", name: "", description: "", priceBuy: "",
    priceSale: "", category: "", image: "", stock: "",
    created_at: "", updated_at: ""
};

const Products = () => {
    const [product, setProduct] = useState(initialStateProduct);
    const [products, setProducts] = useState([]);

    const handleGuardar = async (e) => {
        e.preventDefault();
        const response = await axios.post("/product/save", product);
        if (response.status === 200) {
            console.log("Guardado");
            setProduct(initialStateProduct);
            getProducts();
        }
    }
    const handleEditar = async (e) => {
        e.preventDefault();
        const response = await axios.put("/product/update", product);
        if (response.status === 200) {
            console.log("Editado");
            setProduct(initialStateProduct);
            getProducts();
        }
    }
    const handleEliminar = async (e) => {
        e.preventDefault();
        const response = await axios.delete("/product/delete/" + product._id);
        if (response.status === 200) {
            console.log("Eliminado");
            setProduct(initialStateProduct);
            getProducts();
        }
    }

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
                                        <th scope="col">Producto</th>
                                        <th scope="col">Descr.</th>
                                        <th scope="col">Compra</th>
                                        <th scope="col">Venta</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Ops</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.priceBuy}</td>
                                                <td>{item.priceSale}</td>
                                                <td>{item.category}</td>
                                                <td>{item.image}</td>
                                                <td>{item.stock}</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-outline-primary mx-1"
                                                        data-bs-toggle="modal" data-bs-target="#modalEdit"
                                                        onClick={() => setProduct(item)} >
                                                        <Icon.Edit witdh="24" heigth="24" className="mr-2 feather" />
                                                        Editar
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger mx-1"
                                                        data-bs-toggle="modal" data-bs-target="#modalDelete"
                                                        onClick={() => setProduct(item)} >
                                                        <Icon.Trash witdh="24" heigth="24" className="mr-2 feather" />
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>

            <Modal id="modalCreate" title="Crear Producto"
                handleAction={handleGuardar} btnSave="Guardar"
                product={product} setProduct={setProduct} />

            <Modal id="modalEdit" title="Editar Producto"
                handleAction={handleEditar} btnSave="Editar"
                product={product} setProduct={setProduct} />

            <Modal id="modalDelete" title="Eliminar Producto"
                handleAction={handleEliminar} btnSave="Eliminar"
                product={product} setProduct={setProduct} />

        </div>
    )
}

export default Products;