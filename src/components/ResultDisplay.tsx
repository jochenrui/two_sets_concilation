import React from "react";
interface IResultDisplay {
  text: string;
  result: number[];
}

const ResultDisplay = ({ text, result }: IResultDisplay) => {
  return (
    <div className="result-display">
      <p>{text}</p>
      <p>{result.length > 0 ? result : "/"}</p>
    </div>
  );
};

export default ResultDisplay;
