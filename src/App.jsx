import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import { Ejercicio1 } from "./Componentes/Ejecicio1/Ejercicio1";
import  ListaTareas  from "./Componentes/Lista-Tareas/ListaTareas"

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Ejercicio1 mensaje="my friend" />} />
        <Route path="/lista-tareas" element={<ListaTareas  />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
