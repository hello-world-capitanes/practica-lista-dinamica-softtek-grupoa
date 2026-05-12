import { useState } from "react";

export function useListaDinamica(datosIniciales) {

    const [lista, setLista] = useState(datosIniciales);

    const eliminar = (id) => {
        setLista(lista.filter((item) => item.id !== id));
    };

    const anadir = (texto = "Nueva entrada") => {
        const nuevo = { 
            id: Date.now(), 
            titulo: texto,
            contenido: "Contenido por defecto",
            tema: "General"
        };
        setLista([...lista, nuevo]);
    };

    const mover = (index, direccion) => {
        const nuevaPosicion = direccion === "arriba" ? index -1 : index + 1;
    
        if (nuevaPosicion<0 || nuevaPosicion>=lista.length) 
            return;

        const copiaLista = [...lista];
        const item = copiaLista[index];
        copiaLista[index] = copiaLista[nuevaPosicion];
        copiaLista[nuevaPosicion] = item;

        setLista(copiaLista);
    };

    return {lista, eliminar, anadir, mover}
}