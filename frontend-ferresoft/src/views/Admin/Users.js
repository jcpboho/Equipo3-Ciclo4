import Header from "components/Admin/Header";
import Modal from "components/Admin/ModalUser";
import Nav from "components/Admin/Nav";
import { useEffect, useState } from "react";
import * as Icon from 'react-feather';
import axios from "axios";

const initialStateUser = {
    _id: "", name: "", email: "", password: "",
    role: "", image: "", status: "", createdBy: "",
    updatedBy: "", createdAt: "", updatedAt: ""
};

const Users = () => {
    const [User, setUser] = useState(initialStateUser);
    const [Users, setUsers] = useState([]);

    const handleGuardar = async (e) => {
        e.preventDefault();
        const response = await axios.post("/user/save", User);
        if (response.status === 200) {
            console.log("Guardado");
            setUser(initialStateUser);
            getUsers();
        }
    }
    const handleEditar = async (e) => {
        e.preventDefault();
        const response = await axios.put("/user/update", User);
        if (response.status === 200) {
            console.log("Editado");
            setUser(initialStateUser);
            getUsers();
        }
    }
    const handleEliminar = async (e) => {
        e.preventDefault();
        const response = await axios.delete("/user/delete/" + User._id);
        if (response.status === 200) {
            console.log("Eliminado");
            setUser(initialStateUser);
            getUsers();
        }
    }

    const getUsers = async () => {
        const Users = await axios.get("/user/")
        if (Users.data.length > 0) {
            setUsers(Users.data);
        }
    }

    useEffect(() => {
        console.log("Usuarios");
        getUsers();
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
                            <h1 className="h2">Usuarios</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="modal" data-bs-target="#modalCreate"
                                    onClick={() => setUser(initialStateUser)} >
                                    <Icon.Calendar witdh="24" heigth="24" className="mr-2 feather" />
                                    Crear Usuario
                                </button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Creado Por</th>
                                        <th scope="col">Creado El</th>
                                        <th scope="col">Ops</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Users.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.role}</td>
                                                <td>{item.status}</td>
                                                <td>{item.createdBy}</td>
                                                <td>{item.createdAt}</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-outline-primary mx-1"
                                                        data-bs-toggle="modal" data-bs-target="#modalEdit"
                                                        onClick={() => setUser(item)} >
                                                        <Icon.Edit witdh="24" heigth="24" className="mr-2 feather" />
                                                        Editar
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger mx-1"
                                                        data-bs-toggle="modal" data-bs-target="#modalDelete"
                                                        onClick={() => setUser(item)} >
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

            <Modal id="modalCreate" title="Crear Usuario"
                handleAction={handleGuardar} btnSave="Guardar"
                user={User} setUser={setUser} />

            <Modal id="modalEdit" title="Editar Usuario"
                handleAction={handleEditar} btnSave="Editar"
                user={User} setUser={setUser} />

            <Modal id="modalDelete" title="Eliminar Usuario"
                handleAction={handleEliminar} btnSave="Eliminar"
                user={User} setUser={setUser} />

        </div>
    )
}

export default Users;