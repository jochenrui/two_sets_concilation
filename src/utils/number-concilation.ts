/**
 * Return intersection of 2 number sets
 * @param {number[]} setOne
 * @param {number[]} setTwo
 * @returns list of numbers
 */
export const getIntersectionOfTwoSets = (
  setOne: number[],
  setTwo: number[]
): number[] => {
  const intersection = setOne.filter((number) => setTwo.includes(number));
  return intersection;
};

/**
 * Return unique numbers in first set
 * @param {number[]} setOne
 * @param {number[]} setTwo
 * @returns list of numbers
 */
export const getNumbersOnlyInFirstSet = (
  setOne: number[],
  setTwo: number[]
): number[] => {
  const intersection = setOne.filter((number) => !setTwo.includes(number));
  return intersection;
};

/**
 * Return unique numbers in second set
 * @param {number[]} setOne
 * @param {number[]} setTwo
 * @returns list of numbers
 */
export const getNumbersOnlyInSecondSet = (
  setOne: number[],
  setTwo: number[]
): number[] => {
  const intersection = setTwo.filter((number) => !setOne.includes(number));
  return intersection;
};
