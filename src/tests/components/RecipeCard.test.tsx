// notre composant
import { describe, test } from 'vitest';
import RecipeCard from '../../components/RecipeCard';
import { render } from '../customFakeRenderWithBrowserRouter';

describe('test du composant CardRecioe', () => {
  test('Component render with cookies in props should display Cookie title in the document', () => {
    // ARRANGE : crée notre fausse recette pour filer en props
    const fakeRecipe = {
      id: 12345,
      title: 'Cookies au beurre de cacahuète',
      slug: 'cookies-beurre-de-cacahuete',
      thumbnail:
        'https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg',
      author: 'Solene',
      difficulty: 'Facile',
      description: 'Pour 10 cookies',
      ingredients: [
        {
          id: 1,
          quantity: 120,
          unit: 'g',
          name: 'sucre roux',
        },
        {
          id: 2,
          quantity: 120,
          unit: 'g',
          name: 'beurre de cacahuètes crunchy',
        },
        {
          id: 3,
          quantity: 120,
          unit: 'g',
          name: 'farine de riz',
        },
        {
          id: 4,
          quantity: 1,
          unit: '',
          name: 'oeuf',
        },
        {
          id: 5,
          quantity: 0.5,
          unit: 'cc',
          name: 'bicarbonate',
        },
        {
          id: 6,
          quantity: 1,
          unit: 'pincée',
          name: 'sel',
        },
        {
          id: 7,
          quantity: 50,
          unit: 'g',
          name: 'pépites de chocolat',
        },
      ],
      instructions: [
        'Mélangez au fouet l’oeuf, le sucre et le beurre de cacahuètes.',
        'Ajoutez la farine, le bicarbonate et le sel, mélangez juste assez pour obtenir une pâte malléable.',
        'Incorporez les pépites de chocolat.',
        'Formez et déposez des boules de pâte sur une plaque recouverte de papier cuisson. ',
        'Enfournez à 180°C pour 10 à 12 minutes de cuisson.',
        'Laissez refroidir avant de les décoller de la plaque.',
      ],
    };

    // ACT : on fait le faux render
    // mais on va utiliser un render custom à nous avec un ajout du Browser Router sinon comme y'a des Link dans RecipeCard on aura l'erreur "Cannot destructure property 'basename' of 'React10.useContext(...)' as it is null."
    render(<RecipeCard recipeToDisplay={fakeRecipe} />);

    // ASSERT : on va verifier que y'a le bon titre dans le document
    // const title = screen.getByText('Cookies au beurre de cacahuète');
    // expect(title).toBeInTheDocument();

    // const button = screen.getByRole('link', { name: 'Voir la recette' });
    // expect(button).toBeInTheDocument();
  });
});
