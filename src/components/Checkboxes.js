import React from "react";

const options = [
  {
    id: "inlineRadio1",
    label: "Generar Numeros Aleatorios",
    value: "option1",
  },
  {
    id: "inlineRadio2",
    label: "Desordenar un rango de numeros",
    value: "option2",
  },
  {
    id: "inlineRadio3",
    label: "Desordenar un arreglo de nombres",
    value: "option3",
  },
];

function Checkboxes({ option, handleOptionChange, windowSize }) {
  const isMobile = windowSize < 768;

  return (
    <div
      className={`${isMobile ? "text-start" : "d-flex justify-content-center"}`}
    >
      {options.map((optionItem) => (
        <div
          key={optionItem.id}
          className={`form-check p-5 m-2 border rounded ${
            isMobile
              ? "form-check-inline d-block"
              : "d-flex flex-column align-items-center p-0"
          } ${option === optionItem.value ? "active" : "opacity-75"}`}
        >
          <label
            className={`${isMobile ? "ml-2" : "mt-2"} form-check-label`}
            htmlFor={optionItem.id}
          >
            {optionItem.label}
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={optionItem.id}
            value={optionItem.value}
            onChange={handleOptionChange}
            checked={option === optionItem.value}
          />
        </div>
      ))}
    </div>
  );
}

export default Checkboxes;
