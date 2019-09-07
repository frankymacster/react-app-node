import promiseHandler from "./promiseHandler";

/**
 * Get data.
 *
 * @param {string} alias
 * @param {string} language
 * @return {Promise<Promotion>}
 */
export default async function getData() {
  const response = await fetch(`/api/data`);

  if (!response.ok) {
    throw new Error("couldn't GET data");
  }

  const data = await response.json();

  return data;
}
