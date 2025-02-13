import RecipeCard from './RecipeCard';

export default function MainPage() {
  return (
    <main className="pt-4">
      <h1 className="text-sky-600 text-2xl border-b-1">O Recipes</h1>
      <p>Nos 6 recettes</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </main>
  );
}
