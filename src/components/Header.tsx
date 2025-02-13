// on importe le logo via la syntaxe JS des imports ESModule pour que notre bundler s'en occupe quand il fera le build
import { useState } from 'react';
import { fetchData } from '../api/api';
import logo from '../assets/logo.png';
import { useUserStore } from '../store/store';

export default function Header() {
  // STATE erreur de check de login password
  const [loginError, setLoginError] = useState<null | string>(null);

  // On utilise notre hook useUserStore pour recuperer la fonction login du store
  const { user, login, logout } = useUserStore();

  const checkCredentials = async (email: string, password: string) => {
    try {
      // on va envoyer email et password au back
      const response = await fetchData<{
        pseudo: string;
        token: string;
        isLogged: boolean;
      }>(
        // url à fetch
        'https://orecipesapi.onrender.com/api/login',
        // config
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      // on reçoit un JWT, un pseudo et un booleen à true
      // on va supprimer le potentiel message d'erreur
      setLoginError(null);

      // on veut stocker le user (son pseudo et son jwt) dans le store zustand
      // on va utiliser la fonction login de notre store pour enregistrer les infos
      login(response.pseudo, response.token);
    } catch (_e) {
      // si on reçoit une 401, on va passer dans le catch
      setLoginError('Erreur de connexion....');
    }
  };

  return (
    <header className="h-10 flex justify-between items-center">
      <img src={logo} alt="Orecipes logo" className="h-full" />
      <div>
        {
          // si on a un user on affiche le message de bienvenue sinon le formulaire
          user ? (
            <div className="flex">
              <p>Bonjour {user.name}</p>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  // on deconnecte le user = on vide user dans le store
                  // on utilise la fonction logout du store pour le supprimer
                  logout();
                }}
              >
                se deconnecter
              </button>
            </div>
          ) : (
            <form
              className="flex text-neutral-300"
              // nouveauté react 19 au lieu de mettre un onSubmit et de recuperer le formData dans le currentTarget de l'event on peut utilise rla prop action et on aura direct le formData
              action={(formData) => {
                const email = formData.get('email') as string;
                const password = formData.get('password') as string;
                checkCredentials(email, password);
              }}
            >
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <title>user email</title>
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Username"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <title>user password</title>
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" name="password" className="grow" />
              </label>
              <button type="submit" className="btn btn-primary">
                OK
              </button>
            </form>
          )
        }
        {loginError && <p className="text-red-800">{loginError}</p>}
      </div>
    </header>
  );
}
