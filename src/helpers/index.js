export const changeBeerToColumnChart = (beersList) => {
  const result = {};
  beersList?.forEach(beer => {
    if (result[beer.abv]) result[beer.abv] = result[beer.abv] + 1;
    else result[beer.abv] = 1;
  });

  return Object.entries(result).map(element => element.flat());
};
