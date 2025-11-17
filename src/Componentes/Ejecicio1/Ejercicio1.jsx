import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const Ejercicio1 = ({mensaje}) => {
  const [mensaje,setMensaje] = useState("");

 
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="text-primary h1">Hola Mundo</div>
      <div className="text-primary h1">Hola {mensaje}</div>
      
    </div>
  );
};