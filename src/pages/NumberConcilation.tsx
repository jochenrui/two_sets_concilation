import React, { useEffect, useState } from "react";
import { getFirstNumberSet, getSecondNumberSet } from "../api/two-sets-api";
import NumberSets from "../components/NumberSets";
import ResultDisplay from "../components/ResultDisplay";
import * as concilation from "../utils/number-concilation";

const NumberConcilation = () => {
  const [setOne, setSetOne] = useState<number[]>();
  const [setTwo, setSetTwo] = useState<number[]>();
  const [intersection, setIntersection] = useState<number[]>();
  const [uncommonInSetOne, setUncommonInSetOne] = useState<number[]>();
  const [uncommonInSetTwo, setUncommonInSetTwo] = useState<number[]>();
  useEffect(() => {
    Promise.all([getFirstNumberSet(), getSecondNumberSet()]).then(
      ([setOne, setTwo]) => {
        setSetOne(setOne);
        setSetTwo(setTwo);
        setIntersection(concilation.getIntersectionOfTwoSets(setOne, setTwo));
        setUncommonInSetOne(
          concilation.getNumbersOnlyInFirstSet(setOne, setTwo)
        );
        setUncommonInSetTwo(
          concilation.getNumbersOnlyInSecondSet(setOne, setTwo)
        );
      }
    );
  }, []);

  return (
    <div>
      <h1>Number Concilation</h1>
      {setOne && setTwo && <NumberSets setOne={setOne} setTwo={setTwo} />}
      {intersection && (
        <ResultDisplay text="Intersection" result={intersection} />
      )}
      {uncommonInSetOne && (
        <ResultDisplay text="Uncommon in set one" result={uncommonInSetOne} />
      )}
      {uncommonInSetTwo && (
        <ResultDisplay text="Uncommon in set two" result={uncommonInSetTwo} />
      )}
    </div>
  );
};

export default NumberConcilation;
