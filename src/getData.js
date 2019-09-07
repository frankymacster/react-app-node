import handlePromise from "./handlePromise";

/**
 * Get data.
 *
 * @return {Promise<Data>}
 */
export default async function getData() {
  const [data, dataErr] = await handlePromise(fetch(`/api/data`));

  if (dataErr) {
    throw new Error('Could not fetch data');
  }

  const [dataJson, dataJsonErr] = await handlePromise(data.json());

  if (dataJsonErr) {
    throw new Error('Could not parse JSON');
  }

  return dataJson;
}
