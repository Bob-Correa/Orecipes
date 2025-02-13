// une fonction générique qui fetch des données et throw une erreur si le fetch plante et si tout se passe bien renvoie les res données
export const fetchData = async <GenericTypeOfReturnedData>(
  urlToFetch: string,
) => {
  // fetch des recettes
  const response = await fetch(urlToFetch);
  if (!response.ok) {
    throw new Error('Le fetch a planté');
  }
  const data = (await response.json()) as GenericTypeOfReturnedData;
  // on log les data reçues
  // console.log(data);

  return data;
};
