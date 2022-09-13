import axios, { AxiosRequestConfig, AxiosPromise, AxiosError } from "axios";

/**
 * Returns the first number set from the two-sets-api
 * @returns list of numbers
 */
export const getFirstNumberSet = (): Promise<number[]> => {
  return axios
    .get("http://localhost:3000/api/one.json")
    .then((res) => res.data)
    .catch((err: AxiosError) => console.error(err));
};

/**
 * Returns the second number set from the two-sets-api
 * @returns list of numbers
 */
export const getSecondNumberSet = (): Promise<number[]> => {
  return axios
    .get("http://localhost:3000/api/two.json")
    .then((res) => res.data)
    .catch((err: AxiosError) => console.error(err));
};
