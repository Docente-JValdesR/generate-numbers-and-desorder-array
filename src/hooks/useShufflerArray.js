import { useState, useEffect } from "react";

export default function useShuffleArray(initialArray) {
  const [shuffledArray, setShuffledArray] = useState(initialArray);
  const [shuffle, setShuffle] = useState(false);

  const shuffleArray = (array) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    setShuffledArray(shuffled);
    setShuffle(!shuffle);
  };

  const sortArray = (array) => {
    const sorted = [...array].sort();
    setShuffledArray(sorted);
    setShuffle(!shuffle);
  };

  useEffect(() => {
    if (shuffle) {
      shuffleArray(initialArray);
    }
  }, [shuffle]);

  return [shuffledArray, shuffleArray, sortArray];
}
