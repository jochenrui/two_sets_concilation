import React from "react";

interface INumberSets {
  setOne: number[];
  setTwo: number[];
}

const NumberSets = ({ setOne, setTwo }: INumberSets) => {
  const renderSet = (set: number[]) => {
    return <p>{set.map((number) => `${number} `)}</p>;
  };
  return (
    <div className="number-sets">
      <div className="number-sets_set">
        <p className="number-sets_set_heading">SetOne:</p>
        <p>{renderSet(setOne)}</p>
      </div>
      <div className="number-sets_set">
        <p className="number-sets_set_heading">SetTwo:</p>
        <p>{renderSet(setTwo)}</p>
      </div>
    </div>
  );
};

export default NumberSets;
