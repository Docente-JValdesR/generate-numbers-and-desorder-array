import React, { useState } from "react";
import Papa from "papaparse";

function FileInput() {
  const [data, setData] = useState([]);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
      const content = event.target.result;
      const result = Papa.parse(content);
      setData(result.data);
    };
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileInput;
