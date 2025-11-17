import React, { useEffect, useState } from "react";
import { guardarEnLocal } from "../Lista-Tareas/ListaTareasLocal/LocalStorageLista";

const PaletaDeColores = () => {
  const [color, setColor] = useState("");
  const [listaColor, setListaColores] = useState([]);

  useEffect(() => {
    guardarEnLocal("paletaColores", listaColor);
  }, [listaColor]);

  const manejarInputChange = (e) => {
    setColor(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (color.trim() !== "") {
      setListaColores([...listaColor, color]);
      setColor("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Administrar Colores</h2>

      <form onSubmit={manejarSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">
            Ingrese un color ej: Blue, #FF0000, rgb(255,0,0)
          </label>
          <input
            type="text"
            className="form-control"
            value={color}
            onChange={manejarInputChange}
            placeholder="Ej: blue, #FF5733, red"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Color
        </button>
      </form>

      <div className="mt-4">
        <h3>Paleta de Colores Guardados</h3>
        <div className="row">
          {listaColor.map((color, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card">
                <div
                  className="card-body text-center"
                  style={{
                    backgroundColor: color,
                    minHeight: "100px",
                    color: "#fff",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  {color}
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => eliminarColor(index)}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaletaDeColores;
