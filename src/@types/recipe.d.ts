// pour écrire le code de nos interface on a copié collé le json de l'API sur :
// https://transform.tools/json-to-typescript

export interface IRecipe {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
}

export interface Ingredient {
  id: number;
  quantity: number;
  unit: string;
  name: string;
}
