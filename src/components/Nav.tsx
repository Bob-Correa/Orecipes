import { NavLink } from 'react-router';
import type { IRecipe } from '../@types/recipe';
import { useUserStore } from '../store/store';

interface NavBarProps {
  recipesList: IRecipe[];
}

export default function NavBar({ recipesList }: NavBarProps) {
  // on rcupere le user du store
  const { user } = useUserStore();

  return (
    <nav className="p-4 w-1/4 bg-sky-600">
      <ul>
        <li className="pb-4">
          <NavLink
            className={({ isActive }) => (isActive ? 'border-b-4' : '')}
            to="/"
          >
            Accueil
          </NavLink>
        </li>

        {
          // si le user est connecté il a un menu en plus
          // je recupere le user du store
          user && (
            <li className="pb-4">
              <NavLink
                className={({ isActive }) => (isActive ? 'border-b-4' : '')}
                to="/favorites"
              >
                Mes recettes pref ❤️
              </NavLink>
            </li>
          )
        }

        {recipesList.map((recipe) => (
          <li className="pb-4" key={recipe.id}>
            <NavLink
              className={({ isActive }) => (isActive ? 'border-b-4' : '')}
              to={`/recipe/${recipe.slug}`}
            >
              {recipe.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
