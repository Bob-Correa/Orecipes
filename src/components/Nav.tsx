import type { IRecipe } from '../@types/recipe';

interface NavBarProps {
  recipesList: IRecipe[];
}

export default function NavBar({ recipesList }: NavBarProps) {
  return (
    <nav className="p-4 w-1/4 bg-sky-600">
      <ul>
        <li className="pb-4">Accueil</li>
        {recipesList.map((recipe) => (
          <li className="pb-4" key={recipe.id}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
