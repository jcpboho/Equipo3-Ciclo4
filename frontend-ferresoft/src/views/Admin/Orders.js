import Header from 'components/Admin/Header'
import Nav from 'components/Admin/Nav'
import * as Icon from 'react-feather'


const Orders = () => {

    return (
        <div className="dashboard">
            <Header />

            <div className="container-fluid">
                <div className="row">

                    <Nav />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Pedidos</h1>
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


                        </div>
                    </main>
                </div>
            </div>

            {/* <Modal id="modalCreate" title="Crear Producto" handleAction={handleGuardar} btnSave="Guardar" />

            <Modal id="modalEdit" title="Editar Producto" handleAction={handleEditar} btnSave="Editar" />

            <Modal id="modalDelete" title="Eliminar Producto" handleAction={handleEditar} btnSave="Eliminar" /> */}

        </div>
    )
}

export default Orders;