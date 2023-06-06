import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const nombre = "Dervis Rubiel Lara Esteban";
  return (
    <div>
      <h1>Lista de Hobbies de (nombre)</h1>
      <ol>
        <li>Jugar videojuegos en linea</li>
        <li>Ver animes</li>
        <li>Leer comics</li>
        <li>Escuchar música</li>
        <li>Cantar</li>
        <li>Estar en las redes sociales</li>
      </ol>
    </div>
  )
}
export default App