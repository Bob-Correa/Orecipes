import { create } from 'zustand';

// Interface pour typer tout ce qu'il y a dans notre store
interface IStore {
  user: null | {
    name: string;
    jwtToken: string;
  };
  login: (username: string, jwtToken: string) => void;
  logout: () => void;
}

// on créé le store avec le user
export const useUserStore = create<IStore>((set) => ({
  // STATE
  // le user est null , on va le remplir quand on aura recuperé les infos du back (au submit du form de login)
  user: null,

  // NOS ACTIONS possibles pour modifier le state
  // ce sont bien précises , on ne peut pas modifier le state comme on veut
  // -> state management (equivalent d'un reducer)
  // un reducer est une fonction qui pour un nom d'action donné renvoie un nouveau state
  login: (username: string, jwtToken: string) =>
    set(() => ({
      // todo : plus tard, on pourra aussi directement synchroniser le store avec le localStorage pour le conserver (voir la doc)
      user: { name: username, jwtToken: jwtToken },
    })),
  logout: () => set({ user: null }),
}));
