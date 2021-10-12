export const GetHeroByName = (heroeId, data, error) => {
  if (error) {
    throw new Error(`Hubo un error de peticion`);
  }

  return data.find((hero) => hero.name === heroeId);
};
