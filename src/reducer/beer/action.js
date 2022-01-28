import {
  GET_BEER_LIST_START,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_ERROR,

  GET_BEER_START,
  GET_BEER_SUCCESS,
  GET_BEER_ERROR,
} from "./constants";

import { getBeers, getCurrentBeer } from "../../service";

export const getBeersList = (page, perPage) => async (dispatch) => {
  try {
    dispatch({
      type: GET_BEER_LIST_START,
    })
 
    const data = await getBeers(page, perPage);

    dispatch({
      type: GET_BEER_LIST_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: GET_BEER_LIST_ERROR,
      payload: err,
    })
  }
};

export const getBeer = (page) => async (dispatch) => {
  try {
    dispatch({
      type: GET_BEER_START,
    })
 
    const data = await getCurrentBeer(page);

    dispatch({
      type: GET_BEER_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: GET_BEER_ERROR,
      payload: err,
    })
  }
};
