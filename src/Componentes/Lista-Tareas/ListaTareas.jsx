import React, { useState } from "react";
import { data } from "react-router";

const ListaTareas = () => {
  const [tarea, setTarea] = useState("");
  const [listaTarea, setListaTarea] = useState("");

  const manejarInputChange = (e) => {
    setTarea(e.target.value);
  };
  const manejarSubmit = (e) => {
    e.preventDefault();
    const manejarTarea = () => {
      setListaTarea([...listaTarea, tarea]);
      setTarea("");
    };
  };
  return (
    <>
      <div>
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
        <span>Lista de tareas</span>
        <ul>
          {listaTarea.map((tarea, index) => (                     
            <li key={index} className="list-group-item">
              {tarea}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaTareas;
