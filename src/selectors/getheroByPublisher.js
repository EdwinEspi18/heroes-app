export const GetheroByPublisher = (data, publisher, error) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }
  if (error) {
    throw new Error(`Hubo un error de peticion`);
  }

  return data.filter((hero) => hero.biography.publisher === publisher);
};
