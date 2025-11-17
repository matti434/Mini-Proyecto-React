import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import { Ejercicio1 } from "./Componentes/Ejecicio1/Ejercicio1";
import  ListaTareas  from "./Componentes/Lista-Tareas/ListaTareas"
import ListaTareasLocal from "./Componentes/Lista-Tareas/ListaTareasLocal/ListaTareasLocal";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Ejercicio1 mensaje="my friend" />} />
        <Route path="/lista-tareas" element={<ListaTareas  />} />
        <Route path="/lista-tareasLocal" element={<ListaTareasLocal  />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
