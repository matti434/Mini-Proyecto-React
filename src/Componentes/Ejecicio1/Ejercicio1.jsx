import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const Ejercicio1 = ({mensaje}) => {
  const [msj,setMensaje] = useState("");

  const manejandoMensaje = () => {
    setMensaje("(from changed state)")
  }
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <span>Ejercicio 1</span>
      <div className="text-primary h1">Hola Mundo</div>
      <span>Ejercicio 2</span>
      <div className="text-primary h1">Hola {mensaje}</div>
      <span>Ejercicio 3</span>
      <div className="text-primary h1">Hola {mensaje} {msj && <span className="text-success">{msj}</span>}</div>
      <button  className="btn btn-primary mt-3" onClick={manejandoMensaje}>Cambiar mensaje</button>
    </div>
  );
};