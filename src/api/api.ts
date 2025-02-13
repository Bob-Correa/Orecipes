/**
 * fonction générique qui fetch des données :
 * - elle prend en paramètre une url et un objet de config
 * - elle prend en générique le type des données qu'elle va renvoyer
 */
export const fetchData = async <GenericTypeOfReturnedData>(
  urlToFetch: string,
  // pour typer l'objet de config de fetch on utilise le type RequestInit
  // il contient toutes les propriétés qu'on peut passer à fetch
  configObject: RequestInit = {},
) => {
  // fetch
  const response = await fetch(urlToFetch, configObject);
  if (!response.ok) {
    // si la reponse n'est pas ok on throw une erreur
    throw new Error('Le fetch a planté');
  }
  // on parse la reponse en json et on la type
  const data = (await response.json()) as GenericTypeOfReturnedData;
  // on renvoie les données
  return data;
};
