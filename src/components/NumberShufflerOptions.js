export default function NumberShufflerOptions({
  optionSelected,
  rangeStart,
  rangeEnd,
  delay,
  numbersInput,
  onOptionChange,
  onRangeStartChange,
  onRangeEndChange,
  onDelayChange,
  onNumbersInputChange,
  onGenerateNumbers,
  onClear,
}) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-10 col-lg-6 d-lg-flex justify-content-center">
          <div className="form-group mt-3">
            <select
              value={optionSelected}
              onChange={onOptionChange}
              className="form-select"
              aria-label="Select option"
            >
              <option value="">Selecciona una opción</option>
              <option value="range">Barajar un rango de números</option>
              <option value="numbers">Barajar un grupo de números</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {optionSelected === "range" && (
          <div className="col-10 col-lg-8 d-lg-flex justify-content-center">
            <div className="form-group mt-3 mx-2">
              <label htmlFor="lowerLimit">Límite Inferior:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Inicio del rango"
                value={rangeStart}
                onChange={onRangeStartChange}
              />
            </div>
            <div className="form-group mt-3 mx-2">
              <label htmlFor="upperLimit">Límite Superior:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Fin del rango"
                value={rangeEnd}
                onChange={onRangeEndChange}
              />
            </div>
            <div className="form-group mt-3 mx-2">
              <label htmlFor="delay">Delay (segundos):</label>
              <input
                type="number"
                className="form-control"
                placeholder="Retraso (ms)"
                value={delay}
                onChange={onDelayChange}
              />
            </div>
          </div>
        )}

        {optionSelected === "numbers" && (
          <div className="col-10 col-lg-5 justify-content-center">
            <div className="form-floating mt-3">
              <textarea
                className="form-control"
                placeholder="Ingresa los números a barajar"
                value={numbersInput}
                inputMode="tel"
                onChange={onNumbersInputChange}
                id="floatingTextarea"
                style={{height: '150px'}}
              />
              <label htmlFor="floatingTextarea">Esribe los numeros</label>
            </div>
          </div>
        )}
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <button
            className="btn btn-primary mr-3"
            onClick={onGenerateNumbers}
            disabled={!optionSelected}
          >
            Generar
          </button>
          <button
            className="btn btn-danger"
            onClick={onClear}
            disabled={!optionSelected}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}
