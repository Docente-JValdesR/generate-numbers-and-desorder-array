import React, { useState } from "react";
import Checkboxes from "./components/Checkboxes";
import RandomNumbersGenerator from "./components/RandomNumberGenerator";
import NumberShuffler from "./components/NumberShuffler";
import useWindowSize from "./hooks/useWindowSize";
import ArrayShuffler from "./components/ArrayShuffler";

function App() {
  const windowSize = useWindowSize().width;
  const isMobile = windowSize < 768;
  const [option, setOption] = useState("");
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className={`container text-center ${isMobile ? "" : "vh-100"}`}>
      <div className="row">
        <div className="col-12">
          <Checkboxes
            option={option}
            handleOptionChange={handleOptionChange}
            windowSize={windowSize}
          />
        </div>
        <div className="col-12">
          {option === "option1" && (
            <RandomNumbersGenerator windowSize={windowSize} />
          )}
          {option === "option2" && <NumberShuffler windowSize={windowSize} />}
          {option === "option3" && <ArrayShuffler windowSize={windowSize} />}
        </div>
      </div>
    </div>
  );
}

export default App;
