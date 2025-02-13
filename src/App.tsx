import { useEffect, useState } from 'react';
import type { IRecipe } from './@types/recipe';
import Header from './components/Header';
import MainPage from './components/MainPage';
import NavBar from './components/Nav';

function App() {
  const [isDark, setIsDark] = useState(false);

  // STATE pour stocker les recettes
  // on va les passer via une prop
  // - à NavBar pour qu'il affiche des li
  // - à MainPage pour qu'il affiche des RecipeCard
  // on précise avec le generic de useState que ce state va stocker un tableau de recettes
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  // STATE pour stocker l'etat de loading initialisé à true , on le passe à false quand on a fini le fetch
  const [isLoading, setIsLoading] = useState(true);
  // STATE pour stocker l'erreur (au debut c'est null et si y'a une erreur ça sera une string)
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(
    // callback qui fetch les recettes et rempli le state
    () => {
      const fetchRecipes = async () => {
        try {
          // fetch des recettes
          const response = await fetch(
            'https://orecipesapi.onrender.com/api/recipes',
          );
          if (!response.ok) {
            throw new Error('Le fetch a planté');
          }
          const data = (await response.json()) as IRecipe[];
          // on log les data reçues
          // console.log(data);

          // on les enregistre dans le state
          setRecipes(data);

          // on vire le potentiel message d'erreur du state
          setErrorMessage(null);
        } catch (error: unknown) {
          // error est de type unknown et ensuite en fonction de l'erreur reçue on pourra préciser le type
          if (error instanceof Error) {
            // si l'erreur reçue est du type de celle qu'on a throw en cas de probleme de non response ok alors on enregistre le message dans le state
            setErrorMessage(error.message);
          }
          // on pourrait ajouter d'autre if pour d'autre types d'erreurs
        }

        // on a les recettes ou on a eu un bug de fetch on est passé dans le cacth
        // dans tous les cas on passe le loader à false
        setIsLoading(false);
      };
      fetchRecipes();
    },
    // tableau de deps vide qui dit que la callback QUE après le premier rendu
    [],
  );

  return (
    <div className="flex min-h-screen">
      <button onClick={() => setIsDark(!isDark)} className="absolute">
        {isDark ? <div>☀️</div> : <div>🌙</div>}
      </button>
      {
        // si isLoading est vrai alors on affiche un loader et sinon on affiche la navbar et le main
        isLoading ? (
          <span className="loading loading-bars loading-lg flex justify-center" />
        ) : (
          <>
            <NavBar recipesList={recipes} />
            <div
              className={isDark ? 'p-4 w-3/4 bg-black' : 'p-4 w-3/4 bg-white'}
            >
              <Header />
              {errorMessage && (
                <p className="p-4 text-orange-600">{errorMessage}</p>
              )}
              <MainPage recipesList={recipes} />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
