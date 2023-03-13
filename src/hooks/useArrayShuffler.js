import { useState, useEffect } from "react";

function useArrayShuffler(array) {
  const [shuffledArray, setShuffledArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [repeatedNumbers, setRepeatedNumbers] = useState({});

  useEffect(() => {
    if (array.length > 0) {
      // Shuffling array
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      setShuffledArray(shuffled);

      // Sorting array
      const sorted = [...array].sort((a, b) => a - b);
      setSortedArray(sorted);

      // Counting repeated numbers
      const repeated = array.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
      }, {});
      setRepeatedNumbers(repeated);
    }
  }, [array]);

  return {
    shuffledArray,
    sortedArray,
    repeatedNumbers,
  };
}

export default useArrayShuffler;
