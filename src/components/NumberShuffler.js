import { useState } from 'react';
import NumberShufflerOptions from './NumberShufflerOptions';
import NumberShufflerResults from './NumberShufflerResults';
import useArrayShuffler from '../hooks/useArrayShuffler';

export default function NumberShuffler() {
  const [optionSelected, setOptionSelected] = useState('');
  const [rangeStart, setRangeStart] = useState('1');
  const [rangeEnd, setRangeEnd] = useState('10');
  const [delay, setDelay] = useState('1');
  const [numbersInput, setNumbersInput] = useState('');
  const [array, setArray] = useState([]);
  const { shuffledArray, sortedArray, repeatedNumbers } = useArrayShuffler(array);
  const [isClean, setIsClean] = useState(false);

  const handleOptionChange = (e) => {
    setOptionSelected(e.target.value);
    setArray([]);
  };

  const handleRangeStartChange = (e) => {
    setRangeStart(e.target.value);
  };

  const handleRangeEndChange = (e) => {
    setRangeEnd(e.target.value);
  };

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  const handleGenerateNumbers = async () => {
    if (optionSelected === 'range') {
      const generatedArray = await generateNumbers(rangeStart, rangeEnd, delay);
      setArray(generatedArray);
      setIsClean(false);
    } else if (optionSelected === 'numbers') {
      const numbersArray = numbersInput.split(/[^0-9]+/).map(Number).filter(Boolean);      
      setArray(numbersArray);
      console.log(numbersArray);
      setIsClean(false);
    }
  };

  const handleClear = () => {
    setRangeStart('1');
    setRangeEnd('10');
    setDelay('1');
    setNumbersInput('');
    setArray([]);
    setIsClean(true);
  };

  const handleNumbersInputChange = (event) => {
    setNumbersInput(event.target.value);
  };

  const generateNumbers = (start, end, delay) => {
    const numbers = [];
    for (let i = parseInt(start); i <= parseInt(end); i++) {
      numbers.push(i);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(numbers);
      }, parseInt(delay));
    });
  };

  return (
    <div>
      <NumberShufflerOptions
        optionSelected={optionSelected}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        delay={delay}
        numbersInput={numbersInput}
        onOptionChange={handleOptionChange}
        onRangeStartChange={handleRangeStartChange}
        onRangeEndChange={handleRangeEndChange}
        onDelayChange={handleDelayChange}
        onNumbersInputChange={handleNumbersInputChange}
        onGenerateNumbers={handleGenerateNumbers}
        onClear={handleClear}
      />
      {shuffledArray.length > 0 && (
        <NumberShufflerResults
          shuffledArray={shuffledArray}
          sortedArray={sortedArray}
          repeatedNumbers={repeatedNumbers}
          optionSelected={optionSelected}
          isClean={isClean}
        />
      )}
    </div>
  );
}
