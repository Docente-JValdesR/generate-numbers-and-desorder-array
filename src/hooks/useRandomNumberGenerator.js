import { useState } from "react";

export default function useRandomNumberGenerator() {
  const [options, setOptions] = useState({
    lowerLimit: 1,
    upperLimit: 100,
    quantity: 10,
    delay: 0,
  });
  const [numbers, setNumbers] = useState([]);
  const [repetitions, setRepetitions] = useState({});
  const [showRepetitions, setShowRepetitions] = useState(false);

  const generateNumbers = () => {
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

  const countNumbers = () => {
    const reps = numbers.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {});
    setRepetitions(reps);
    setShowRepetitions(true);
  };

  const clearAll = () => {
    setOptions({
      lowerLimit: 1,
      upperLimit: 100,
      quantity: 10,
      delay: 0,
    });
    setNumbers([]);
    setRepetitions({});
    setShowRepetitions(false);
  };

  const handleOptionChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleSelectedAction = (e) => {
    if (e.target.value === "count") {
      countNumbers();
    } else {
      setShowRepetitions(false);
    }
  };

  return {
    options,
    numbers,
    repetitions,
    showRepetitions,
    handleOptionChange,
    generateNumbers,
    handleSelectedAction,
    clearAll,
  };
}
