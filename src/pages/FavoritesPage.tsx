import { useEffect, useState } from 'react';
import type { IRecipe } from '../@types/recipe';
import { fetchData } from '../api/api';
import RecipeCard from '../components/RecipeCard';
import { useUserStore } from '../store/store';

export default function FavoritesPage() {
  // STATE pour stocker les recettes pref
  const [favRecipes, setFavRecipes] = useState<IRecipe[]>([]);

  // on recupere le token depuis notre store zustand
  const store = useUserStore();
  // on met une une non nulle assertion car on sait que le user dans cette page ne sera pas null car cette page est affichée sur une route qui n'existe pas si y'a pas de user
  const user = store.user!;

  useEffect(() => {
    const fetchPrefRecipesAndSaveInState = async () => {
      const data = await fetchData<{ favorites: IRecipe[] }>(
        // URL à fetch
        'https://orecipesapi.onrender.com/api/favorites',
        // config
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.jwtToken}`,
          },
        },
      );
      // on a recup les recettes on peut les placer dans le state
      setFavRecipes(data.favorites);
    };

    fetchPrefRecipesAndSaveInState();
  }, [user]);

  if (!user) {
    // on pourais renvoyer vers la page d'acceuil avec useNavigate ou afficher un message d'erreur
    return <p>Vous n'avez pas accès à cette page</p>;
  }
  return (
    <main className="pt-4">
      <h1 className="text-sky-600 text-2xl border-b-1">
        Mes recettes preferées
      </h1>
      <p>Les meilleures</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeToDisplay={recipe} />
        ))}
      </div>
    </main>
  );
}
