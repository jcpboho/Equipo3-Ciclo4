

const handleEditCreate = (e) => (
    <>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre</span>
            {/* Se agrego el valor de state product y tambien se añadio onchange para actualizar un elemento del arreglo state */}
            <input value={e.producto.nombre || ''} onChange={({ target }) => { e.setProduct({ ...e.producto, nombre: target.value }) }}
                type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Descripcion</span>
            <input value={e.producto.descripcion || ''} onChange={({ target }) => { e.setProduct({ ...e.producto, descripcion: target.value }) }}
                type="text" className="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon2" />
        </div>

        <label htmlFor="basic-url" className="form-label">Info. Producto</label>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Precio C.</span>
            <input value={e.producto.precio_compra || ''} onChange={({ target }) => { e.setProduct({ ...e.producto, precio_compra: target.value }) }}
                type="number" className="form-control" id="basic-url" placeholder="Precio Compra" aria-label="Precio Compra" aria-describedby="basic-addon3" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Precio V.</span>
            <input value={e.producto.precio_venta || ''} onChange={({ target }) => { e.setProduct({ ...e.producto, precio_venta: target.value }) }}
                type="number" className="form-control" id="basic-url" placeholder="Precio Venta" aria-label="Precio Venta" aria-describedby="basic-addon3" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Categoria</span>
            <input value={e.producto.categoria || ''} onChange={({ target }) => { e.setProduct({ ...e.producto, categoria: target.value }) }}
                type="text" className="form-control" id="basic-url" placeholder="Categoria" aria-label="Categoria" aria-describedby="basic-addon3" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Stock</span>
            <input value={e.producto.stock || ''} onChange={({ target }) => { e.setProduct({ ...e.producto, stock: target.value }) }}
                type="number" className="form-control" id="basic-url" placeholder="Cantidad" aria-label="Cantidad" aria-describedby="basic-addon3" />
        </div>
    </>);

const handleDelete = (e) => (<>
    <h5>¿Desea eliminar el producto {e.producto.nombre}?</h5>
</>);


const Modal = (props) => {

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={props.handleAction}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3 d-none">
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            {props.btnSave === 'Eliminar' ? handleDelete(props) : handleEditCreate(props)}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className="btn btn-primary" type="submit">{props.btnSave}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;