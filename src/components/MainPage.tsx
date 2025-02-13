import type { IRecipe } from '../@types/recipe';
import RecipeCard from './RecipeCard';

interface MainPageProps {
  recipesList: IRecipe[];
}

export default function MainPage({ recipesList }: MainPageProps) {
  return (
    <main className="pt-4">
      <h1 className="text-sky-600 text-2xl border-b-1">O Recipes</h1>
      <p>Nos 6 recettes</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipesList.map((recipe) => (
          <RecipeCard key={recipe.id} recipeToDisplay={recipe} />
        ))}
      </div>
    </main>
  );
}
