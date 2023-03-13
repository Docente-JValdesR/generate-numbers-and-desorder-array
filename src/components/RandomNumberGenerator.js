import { useState } from "react";

function RandomNumbersGenerator() {
  const [options, setOptions] = useState({
    lowerLimit: 1,
    upperLimit: 100,
    quantity: 10,
    delay: 0,
  });
  const [numbers, setNumbers] = useState([]);
  const [repetitions, setRepetitions] = useState({});
  const [selectedAction, setSelectedAction] = useState("");
  const [showRepetitions, setShowRepetitions] = useState(false);

  const handleOptionChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleGenerateNumbers = () => {
    const { lowerLimit, upperLimit, quantity, delay } = options;
    setNumbers([]);
    const nums = [];
    for (let i = 0; i < quantity; i++) {
      setTimeout(() => {
        const num =
          Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) +
          lowerLimit;
        setNumbers((prevNumbers) => [...prevNumbers, num]);
      }, delay * i * 500);
    }
    setRepetitions({});
    setShowRepetitions(false);
  };

  const handleCountNumbers = () => {
    const reps = numbers.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {});
    setRepetitions(reps);
    setShowRepetitions(true);
  };

  const handleSelectedAction = (e) => {
    setSelectedAction(e.target.value);
    if (e.target.value === "count") {
      handleCountNumbers();
    } else {
      setShowRepetitions(false);
    }
  };

  const handleClear = () => {
    setOptions({
      lowerLimit: 1,
      upperLimit: 100,
      quantity: 10,
      delay: 0,
    });
    setNumbers([]);
    setRepetitions({});
    setSelectedAction("");
    setShowRepetitions(false);
  };

  return (
    <div className="">
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-10 col-lg-6 d-lg-flex">
            <div className="form-group mr-3">
              <label htmlFor="lowerLimit">Límite Inferior:</label>
              <input
                type="number"
                className="form-control"
                id="lowerLimit"
                name="lowerLimit"
                value={options.lowerLimit}
                onChange={handleOptionChange}
              />
            </div>
            <div className="form-group mr-3">
              <label htmlFor="upperLimit">Límite Superior:</label>
              <input
                type="number"
                className="form-control"
                id="upperLimit"
                name="upperLimit"
                value={options.upperLimit}
                onChange={handleOptionChange}
              />
            </div>
            <div className="form-group mr-3">
              <label htmlFor="quantity">Cantidad:</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                value={options.quantity}
                onChange={handleOptionChange}
              />
            </div>
            <div className="form-group mr-3">
              <label htmlFor="delay">Delay (segundos):</label>
              <input
                type="number"
                className="form-control"
                id="delay"
                name="delay"
                value={options.delay}
                onChange={handleOptionChange}
              />
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary mr-3 mt-3"
              onClick={() => {
                handleGenerateNumbers(options.delay);
              }}
            >
              Generar
            </button>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <p className="font-weight-bold">Números Generados:</p>
            <ul className="nav-item">
              {numbers.map((num, index) => (
                <li
                  key={index}
                  className="nav-link"
                  style={{
                    animationDelay: `${index * options.delay}s`,
                  }}
                >
                  {num}
                </li>
              ))}
            </ul>
          </div>
          {showRepetitions && (
            <div className="col-6">
              <p className="font-weight-bold">
                Cantidad de Repeticiones de cada Número:
              </p>
              <ul className="nav-item">
                {Object.entries(repetitions).map(([num, count], index) => (
                  <li key={index} className="nav-link">
                    {num} - ({count})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <button
            className="btn btn-secondary mr-3"
            value="count"
            onClick={handleSelectedAction}
            disabled={!numbers.length}
          >
            Ordenar y Contar
          </button>
          <button
            className="btn btn-danger"
            onClick={handleClear}
            disabled={!numbers.length}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomNumbersGenerator;
