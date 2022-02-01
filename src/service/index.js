import axios from "axios";

export const getBeers = async (page = 1, perPage = 25) => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`);
  return response.data;
};

export const getCurrentBeer = async (id) => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
  return response.data;
};
 