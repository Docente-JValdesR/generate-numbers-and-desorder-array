import { useState } from "react";
import Papa from "papaparse";

function ArrayShuffler() {
  const [inputType, setInputType] = useState("");
  const [names, setNames] = useState([""]);
  const [shuffledNames, setShuffledNames] = useState([]);
  const [sorted, setSorted] = useState([]);

  const handleInputChange = (event) => {
    setInputType(event.target.value);
  };

  const handleAddName = () => {
    setNames([...names, ""]);
  };

  const handleNameChange = (index, event) => {
    const newNames = [...names];
    newNames[index] = event.target.value;
    setNames(newNames);
  };

  const handleRemoveName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const handleShuffleNames = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    setShuffledNames(shuffledNames);
  };

  const handleOrderNames = () => {
    const sorted = [...names].sort();
    setSorted(sorted);
  };

  const handleClearNames = () => {
    setNames([""]);
    setShuffledNames([]);
    setSorted([]);
    setInputType("");
  };

  const handleFileSubmit = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
      const content = event.target.result;
      const result = Papa.parse(content);
      setNames(result.data);
    };
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8 col-lg-6 d-lg-flex justify-content-center">
          <select
            className="form-select mt-3"
            value={inputType}
            onChange={handleInputChange}
            aria-label="Select Option"
          >
            <option value="">Selecciona una opcion</option>
            <option value="nombres">Insertar Nombres</option>
            <option value="archivo">Subir Archivo</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {inputType === "nombres" && (
          <div className="col-12 col-lg-5 justify-content-center">
            {names.map((name, index) => (
              <div className="mb-3 input-group" key={index}>
                <input
                  type="text"
                  className="form-control"
                  id={`name-input-${index + 1}`}
                  placeholder="Nombre"
                  value={name}
                  onChange={(event) => handleNameChange(index, event)}
                />
                {index === names.length - 1 ? (
                  <span className="input-group-append ms-2">
                    <i
                      className="bi bi-plus-circle btn btn-success rounded-circle"
                      onClick={handleAddName}
                    ></i>
                  </span>
                ) : (
                  <span className="input-group-append ms-2">
                    <i
                      className="bi bi-x-circle btn btn-danger rounded-circle"
                      onClick={() => handleRemoveName(index)}
                    ></i>
                  </span>
                )}
              </div>
            ))}
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleShuffleNames}
              >
                Desordenar
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleOrderNames}
              >
                Ordenar
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleClearNames}
              >
                Limpiar
              </button>
            </div>
          </div>
        )}
        {inputType === "archivo" && (
          <div className="col-12 col-lg-5 justify-content-center">
            <input
              type="file"
              className="form-control"
              onChange={handleFileSubmit}
            />
            <ul className="nav-items">
              {names.map((item, index) => (
                <li className="nav-link" key={index}>
                  {item}
                </li>
              ))}
                          <div className="d-grid gap-2 mt-3">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleShuffleNames}
              >
                Desordenar
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleOrderNames}
              >
                Ordenar
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleClearNames}
              >
                Limpiar
              </button>
            </div>
            </ul>
          </div>
        )}
      </div>

      <div className="row justify-content-center my-5">
        <div
          className={`col-12 col-lg-4 ${sorted.length === 0 ? "d-none" : ""}`}
        >
          <h5>Nombres Ordenados</h5>
          {sorted.map((name, index) => (
            <ul className="nav-item" key={index}>
              <li className="nav-link">{name}</li>
            </ul>
          ))}
        </div>
        <div
          className={`col-12 col-lg-4 ${
            shuffledNames.length === 0 ? "d-none" : ""
          }`}
        >
          <h5>Nombres Desordenados</h5>
          {shuffledNames.map((name, index) => (
            <ul className="nav-item" key={index}>
              <li className="nav-link">{name}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArrayShuffler;
