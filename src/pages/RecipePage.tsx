// ce composant doit recuperer la valeur du paramètre dynamique "slug" de l'URL
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { IRecipe } from '../@types/recipe';
import { fetchData } from '../api/api';

export default function RecipePage() {
  const params = useParams();
  const slugDeLurl = params.slug;

  // STATE pour stocker la recette
  // initialise le state à null mais on précise que plus tard y'aura une recette
  const [recette, setRecette] = useState<null | IRecipe>(null);
  // STATE pour stocker l'etat de loading
  const [isLoading, setIsLoading] = useState(true);
  // STATE pour stocker l'erreur (au debut c'est null et si y'a une erreur ça sera une string)
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(
    () => {
      const fetchAndSaveRecipeInstate = async () => {
        try {
          // on passe le loader à vrai
          setIsLoading(true);
          // on fetch la recette correspondant au slug de l'URL
          const recipe = await fetchData<IRecipe>(
            `https://orecipesapi.onrender.com/api/recipes/${slugDeLurl}`,
          );
          // on enregistre la recette dans le state
          setRecette(recipe);
        } catch (_e) {
          // si on catch une erreur on met un message dans le state
          setErrorMessage('Cette recette nexiste pas');
        }
        // on a la recette ou on a eu un bug de fetch, on reset le loader
        setIsLoading(false);
      };
      fetchAndSaveRecipeInstate();
    },
    // on ajoute le slug dans le tableau de dependance de useEffect pour que cet effet soit re executé si le slug change
    [slugDeLurl],
  );

  // si on est en train de load la recette on affiche pas le meme JSX que si on a la recette
  if (isLoading) {
    return (
      <span className="loading loading-bars loading-lg flex justify-center" />
    );
  }

  // si y'a une erreur de fetch ou qu'on a pas de recette on affiche une erreur
  if (errorMessage || !recette) {
    return <div className="text-red-700 p-4 text-center">{errorMessage}</div>;
  }

  // si tout va bien (pas d'erreur et loading fini) on affiche la recette
  return (
    <main className="pt-4 text-neutral-800">
      <h1 className="text-sky-600 text-2xl border-b-1 mb-2">{recette.title}</h1>
      <img src={recette.thumbnail} alt={recette.title} className="rounded" />
      <h2 className="text-sky-600 text-xl border-b-1 mb-4">Ingredients</h2>
      <ul>
        {recette.ingredients.map((ingredient) => (
          <li className="m-2 ml-0" key={ingredient.id}>
            <span className="bg-sky-600 text-white p-1 rounded mr-1 text-sm">
              {ingredient.quantity} {ingredient.unit}
            </span>
            {ingredient.name}
          </li>
        ))}
      </ul>
      <h2 className="text-sky-600 text-xl border-b-1 mb-4">Instructions</h2>
      <ul>
        {recette.instructions.map((instructions) => (
          <li className="mb-2" key={instructions}>
            {instructions}
          </li>
        ))}
      </ul>
    </main>
  );
}
