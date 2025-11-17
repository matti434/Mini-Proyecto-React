import React, { useEffect, useState } from "react";
import { guardarEnLocal } from "./LocalStorageLista";

const ListaTareas = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(() => {
    guardarEnLocal("listaTareas", listaTareas);
  }, [listaTareas]);

  const manejarInputChange = (e) => {
    setTarea(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim() !== "") {
      setListaTareas([...listaTareas, tarea]);
      setTarea("");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={manejarSubmit}>
        <div className="mb-3">
          <label className="form-label">Ingresa las tareas</label>
          <input
            type="text"
            className="form-control"
            value={tarea}
            onChange={manejarInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Tarea
        </button>
      </form>

      <div className="mt-4">
        <h3>Lista de tareas</h3>
        <ul className="list-group">
          {listaTareas.map((tarea, index) => (
            <li key={index} className="list-group-item">
              {tarea}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaTareas;
