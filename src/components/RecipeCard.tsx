import { Link } from 'react-router';
import type { IRecipe } from '../@types/recipe';

// TYPESCRIPT : type des props du composant RecipeCard
interface RecipeCardProps {
  recipeToDisplay: IRecipe;
}

// COMPOSANT RecipeCard
export default function RecipeCard({ recipeToDisplay }: RecipeCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={recipeToDisplay.thumbnail} alt={recipeToDisplay.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeToDisplay.title}</h2>
        <p>{recipeToDisplay.description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/recipe/${recipeToDisplay.slug}`}
            type="button"
            className="btn btn-primary"
          >
            Voir la recette
          </Link>
        </div>
      </div>
    </div>
  );
}
