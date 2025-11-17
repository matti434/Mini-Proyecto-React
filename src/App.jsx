import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import { Ejercicio1 } from "./Componentes/Ejecicio1/Ejercicio1";


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Ejercicio1 mensaje="my friend" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
