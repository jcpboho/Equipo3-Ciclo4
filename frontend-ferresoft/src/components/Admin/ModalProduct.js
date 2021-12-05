import { useState } from "react";

const onFileChange = (e, j, setImages) => {

    if (e.target.files && e.target.files[0]) {
        var filesAmount = e.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
            j.formData.append('image', e.target.files[i]);
            var reader = new FileReader();
            reader.onload = (e) => {
                setImages((old) => ([...old, e.target.result]));
            }
            reader.readAsDataURL(e.target.files[i]);
        }
    }
}
const handleEditCreate = (e, images, setImages) => (
    <>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre</span>
            {/* Se agrego el valor de state product y tambien se añadio onchange para actualizar un elemento del arreglo state */}
            <input value={e.product.name || ''} onChange={({ target }) => { e.setProduct({ ...e.product, name: target.value }) }}
                type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Descripcion</span>
            <input value={e.product.description || ''} onChange={({ target }) => { e.setProduct({ ...e.product, description: target.value }) }}
                type="text" className="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon2" />
        </div>

        <label htmlFor="basic-url" className="form-label">Info. product</label>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Precio C.</span>
            <input value={e.product.priceBuy || ''} onChange={({ target }) => { e.setProduct({ ...e.product, priceBuy: target.value }) }}
                type="number" className="form-control" id="basic-url" placeholder="Precio Compra" aria-label="Precio Compra" aria-describedby="basic-addon3" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Precio V.</span>
            <input value={e.product.priceSale || ''} onChange={({ target }) => { e.setProduct({ ...e.product, priceSale: target.value }) }}
                type="number" className="form-control" id="basic-url" placeholder="Precio Venta" aria-label="Precio Venta" aria-describedby="basic-addon3" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Categoria</span>
            <input value={e.product.category || ''} onChange={({ target }) => { e.setProduct({ ...e.product, category: target.value }) }}
                type="text" className="form-control" id="basic-url" placeholder="Categoria" aria-label="Categoria" aria-describedby="basic-addon3" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Stock</span>
            <input value={e.product.stock || ''} onChange={({ target }) => { e.setProduct({ ...e.product, stock: target.value }) }}
                type="number" className="form-control" id="basic-url" placeholder="Cantidad" aria-label="Cantidad" aria-describedby="basic-addon3" />
        </div>

        <div className="form-group">
            <label forhtml="">Images</label>
            <input type="file" multiple className="form-control"
                onChange={(i) => onFileChange(i, e, setImages)} name="images" placeholder="images" />
            {images.map((image, index) => (
                <img key={index} srcSet={image} height="150" width="200px" alt="" className="m-2" />
            ))}
        </div>
    </>);

const handleDelete = (e) => (
    <>
        <h5>¿Desea eliminar el product {e.product.name}?</h5>
    </>
);


const Modal = (props) => {
    const [images, setImages] = useState([]);

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
                                {/* Se agrego el valor de state product y tambien se añadio onchange para actualizar un elemento del arreglo state */}
                                <input value={props.product._id || ''}
                                    type="hidden" className="form-control" placeholder="Id" aria-label="id" aria-describedby="basic-addon1" />
                            </div>

                            {props.btnSave === 'Eliminar' ? handleDelete(props) : handleEditCreate(props, images, setImages)}

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