import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ListaDinamica from './ListaDinamica/ListaDinamica';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const misDatos = [
    { id: 1, titulo: "Kiwi", contenido: "Es una fruta verde", tema: "Frutas" },
    { id: 2, titulo: "Perro", contenido: "Es el mejor amigo del hombre", tema: "Animales" },
    { id: 3, titulo: "Gato", contenido: "Es un animal independiente", tema: "Animales" }
  ];

  return (
    <div className="container py-5">
      <ListaDinamica datosIniciales={misDatos} />
    </div>
  );
}

export default App
