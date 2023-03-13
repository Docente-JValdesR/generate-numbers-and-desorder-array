import { useState } from "react";

function ArrayShuffler() {
  const [names, setNames] = useState([""]);
  const [shuffledNames, setShuffledNames] = useState([]);
  const [sorted, setSorted] = useState([]);
  console.log(shuffledNames)
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
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 my-2 text-center">Inserta un Nombre</div>

        <div className="col-12 col-lg-4">
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
      </div>
      <div className="row justify-content-center my-5">
        <div className={`col-12 col-lg-4 ${sorted.length === 0 ? "d-none" : ""}`}>
          <h5>Nombres Ordenados</h5>
          {sorted.map((name, index) => (
            <ul className="nav-item" key={index}>
              <li className="nav-link">{name}</li>
            </ul>
          ))}
        </div>
        <div className={`col-12 col-lg-4 ${shuffledNames.length === 0 ? "d-none" : ""}`}>
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
