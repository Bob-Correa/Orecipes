// ATTENTION si on stocke le token dans le localStorage faut bien proteger notre site des failles XSS pour pas que le user se fasse voler son token

// fonction qui sauvegarde le token et le pseudo dan sle localstorage
// elle sera executée quand le user s'est logué
export const saveTokenAndPseudoInlocalStorage = (
  token: string,
  pseudo: string,
) => {
  localStorage.setItem('pseudo', pseudo);
  localStorage.setItem('token', token);
};

// fonction executée quand le user se deconnecte
export const deleteTokenAndPseudoFromlocalStorage = () => {
  localStorage.removeItem('pseudo');
  localStorage.removeItem('token');
};

// fonction qui va chercher si y'a un token et pseudo dans le localstorage que ça les renvoye pour qu'on puisse les suavegarder dans le store
// fonction executée au premier rendu de notre app -> useEffect avec tab de deps vide
export const getTokenAndPseudoFromlocalStorage = () => {
  const pseudo = localStorage.getItem('pseudo');
  const token = localStorage.getItem('token');

  // si y'a un token et un pseudo on les renvoie
  if (token && pseudo) {
    return { token, pseudo };
  }

  // si on a pas de token ni de pseudo dans le local storage on renvoie null
  return null;
};
