

const handleEditCreate = (e) => (
    <>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre</span>
            {/* Se agrego el valor de state user y tambien se añadio onchange para actualizar un elemento del arreglo state */}
            <input value={e.user.name || ''} onChange={({ target }) => { e.setUser({ ...e.user, name: target.value }) }}
                type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Correo</span>
            <input value={e.user.email || ''} onChange={({ target }) => { e.setUser({ ...e.user, email: target.value }) }}
                type="text" className="form-control" placeholder="Correo" aria-label="Descripcion" aria-describedby="basic-addon2" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Contraseña</span>
            <input value={e.user.password || ''} onChange={({ target }) => { e.setUser({ ...e.user, password: target.value }) }}
                type="password" className="form-control" id="basic-url" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon3" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Rol</span>
            <input value={e.user.role || ''} onChange={({ target }) => { e.setUser({ ...e.user, role: target.value }) }}
                type="text" className="form-control" id="basic-url" placeholder="Rol" aria-label="Rol" aria-describedby="basic-addon3" />
        </div>

    </>);

const handleDelete = (e) => (
    <>
        <h5>¿Desea eliminar el usuario {e.user.name}?</h5>
    </>
);


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
                                <span className="input-group-text" id="basic-addon1">Id</span>
                                {/* Se agrego el valor de state user y tambien se añadio onchange para actualizar un elemento del arreglo state */}
                                <input value={props.user._id || ''}
                                    type="hidden" className="form-control" placeholder="Id" aria-label="id" aria-describedby="basic-addon1" />
                            </div>

                            {props.btnSave === 'Eliminar' ? handleDelete(props) : handleEditCreate(props)}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">{props.btnSave}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;