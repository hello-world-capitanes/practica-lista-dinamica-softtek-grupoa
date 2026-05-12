import {useState} from "react";
import { useListaDinamica } from "../../hooks/useListaDinamica";
import DetalleModal from "../modal";
import { useModal } from "../../hooks/useModal";
import RenderForm from "../form/RenderForm";


function ListaDinamica({datosIniciales}) {
    
    const{lista, eliminar, anadir, mover} = useListaDinamica(datosIniciales);
    const {visible, data, abrir, cerrar} = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const nuevoDato = {
            titulo: formData.get("titulo"),
            contenido: formData.get("contenido"),
            tema: formData.get("tema")
        };

        anadir(nuevoDato);
        e.target.reset();
    } 

    return (
        <div className="container mt-4">
        <h2>Nuestra Super Lista y Formulario Dinamicos</h2>
        <div className="mb-5">
                <h4>Formulario</h4>
                <RenderForm handleSubmit={handleSubmit} />
            </div>

        <ul className="list-group">
            {lista.map((item, index) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                
                <span 
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} 
                onClick={() => abrir(item)}
                >
                {item.titulo}
                </span>
                
                <div className="btn-group">
                <button className="btn btn-sm btn-outline-secondary" onClick={() => mover(index, "arriba")} disabled={index === 0}>↑</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => mover(index, "abajo")} disabled={index === lista.length - 1}>↓</button>
                <button className="btn btn-sm btn-danger" onClick={() => eliminar(item.id)}>Eliminar</button>
                </div>
            </li>
            ))}
        </ul>

        <DetalleModal 
            show={visible}
            item={data}
            onCerrar={cerrar}
        />
        </div>
    )
}

export default ListaDinamica;