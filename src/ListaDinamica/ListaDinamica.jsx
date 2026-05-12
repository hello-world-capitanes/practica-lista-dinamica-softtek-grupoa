import {useState} from "react";
import { useListaDinamica } from "./useListaDinamica";

function ListaDinamica({datosIniciales}) {
    
    const{lista, eliminar, anadir, mover} = useListaDinamica(datosIniciales);
    const {visible, data, abrir, cerrar} = useModal();

    return (
        <div className="container mt-4">
        <h2>Mi Super Lista Dinamica</h2>
        <button className="btn btn-primary mb-3" onClick={() => anadir("Nuevo")}>Añadir</button>

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