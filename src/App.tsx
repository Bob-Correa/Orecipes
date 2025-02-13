import { useEffect, useState } from 'react';
import type { IRecipe } from './@types/recipe';
import Header from './components/Header';
import MainPage from './components/MainPage';
import NavBar from './components/Nav';

function App() {
  // STATE pour stocker les recettes
  // on va les passer via une prop
  // - à NavBar pour qu'il affiche des li
  // - à MainPage pour qu'il affiche des RecipeCard
  // on précise avec le generic de useState que ce state va stocker un tableau de recettes
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

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
        } catch (e) {
          console.log('erreur de fetch');
        }
      };
      fetchRecipes();
    },
    // tableau de deps vide qui dit que la callback QUE après le premier rendu
    [],
  );

  return (
    <div className="flex min-h-screen">
      <NavBar recipesList={recipes} />
      <div className="p-4 w-3/4 bg-white">
        <Header />
        <MainPage recipesList={recipes} />
      </div>
    </div>
  );
}

export default App;
