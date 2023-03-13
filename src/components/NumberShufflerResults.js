import React, { useState } from "react";

export default function NumberShufflerResults({
  shuffledArray,
  sortedArray,
  repeatedNumbers,
  isClean,
}) {
  const [showSorted, setShowSorted] = useState(false);
  const [showRepetitions, setShowRepetitions] = useState(false);
  const [showRange, setShowRange] = useState(false);
  const [showMean, setShowMean] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [showMedian, setShowMedian] = useState(false);
  const [showCount, setShowCount] = useState(false);

  return (
    <div className={isClean ? "d-none" : "container"}>
      <div className="row justify-content-center">
        <div className="col-4 col-lg-3">
          {shuffledArray && shuffledArray.length > 0 && (
            <div>
              <ul className="nav-item p-0">
                <button className="btn btn-sm btn-success">
                  Numeros Generados:
                </button>
                {shuffledArray.map((num, index) => (
                  <li key={index} className="nav-link">
                    {num}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-4 col-lg-3">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setShowSorted(!showSorted)}
          >
            Numeros Ordenados
          </button>
          {showSorted && sortedArray && sortedArray.length > 0 && (
            <div>
              <ul className="nav-item p-0">
                {sortedArray.map((num, index) => (
                  <li key={index} className="nav-link">
                    {num}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-4 col-lg-3">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setShowRepetitions(!showRepetitions)}
          >
            Repeticiones por numero
          </button>
          {showRepetitions &&
            repeatedNumbers &&
            Object.keys(repeatedNumbers).length > 0 && (
              <div>
                <ul className="nav-item p-0">
                  {Object.entries(repeatedNumbers)
                    .map(([num, count]) => `${num} - (${count})`)
                    .map((num, index) => (
                      <li className="nav-link" key={index}>
                        {num}
                      </li>
                    ))}
                </ul>
              </div>
            )}
        </div>
      </div>

      <div className="row justify-content-center d-flex flex-column align-content-center">
        <div className="col-10 col-lg-4 d-flex flex-row my-1 justify-content-between">
          <button
            className="btn btn-sm btn-secondary d-flex"
            onClick={() => setShowRange(!showRange)}
          >
            Rango
          </button>
          {showRange && shuffledArray && shuffledArray.length > 0 && (
            <div>
              <p>
                R:{" "}
                {(() => {
                  const sortedArr = [...shuffledArray].sort((a, b) => a - b);
                  return sortedArr[sortedArr.length - 1] - sortedArr[0];
                })()}
              </p>
            </div>
          )}
        </div>
        <div className="col-10 col-lg-4 d-flex flex-row my-1 justify-content-between">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setShowMean(!showMean)}
          >
            Media Aritmetica
          </button>
          {showMean &&
            !isClean &&
            shuffledArray &&
            shuffledArray.length > 0 && (
              <div>
                <p>
                  X:{" "}
                  {(
                    shuffledArray.reduce((a, b) => a + b) / shuffledArray.length
                  ).toFixed(2)}
                </p>
              </div>
            )}
        </div>
        <div className="col-10 col-lg-4 d-flex flex-row my-1 justify-content-between">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setShowMode(!showMode)}
          >
            Mostrar Moda
          </button>
          {showMode &&
            !isClean &&
            shuffledArray &&
            shuffledArray.length > 0 && (
              <div>
                <p>
                  {Object.values(repeatedNumbers).every((count) => count === 1)
                    ? "No hay moda"
                    : `La moda es ${Object.entries(repeatedNumbers)
                        .filter(
                          ([num, count]) =>
                            count ===
                            Math.max(...Object.values(repeatedNumbers))
                        )
                        .map(([num, count]) => num)
                        .join(", ")}`}
                </p>
              </div>
            )}
        </div>

        <div className="col-10 col-lg-4 d-flex flex-row my-1 justify-content-between">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setShowMedian(!showMedian)}
          >
            Mostrar Mediana
          </button>
          {showMedian &&
            !isClean &&
            shuffledArray &&
            shuffledArray.length > 0 && (
              <div>
                <p>
                  Me:{" "}
                  {(() => {
                    const sortedArr = [...shuffledArray].sort((a, b) => a - b);
                    const mid = Math.floor(sortedArr.length / 2);
                    return sortedArr.length % 2 !== 0
                      ? sortedArr[mid]
                      : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
                  })()}
                </p>
              </div>
            )}
        </div>
        <div className="col-10 col-lg-4 d-flex flex-row my-1 justify-content-between">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setShowCount(!showCount)}
          >
            Cantidad de Numeros
          </button>
          {showCount && shuffledArray && shuffledArray.length > 0 && (
            <div>
              <p>n: {shuffledArray.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
