import {
  GET_BEER_LIST_START,
  GET_BEER_LIST_SUCCESS,
  GET_BEER_LIST_ERROR,

  GET_BEER_START,
  GET_BEER_SUCCESS,
  GET_BEER_ERROR,
} from "./constants";

const defaultState = {
  beersList: {
    data: [],
    loading: false,
    error: false,
  },
  currentBeer: {
    data: [],
    loading: false,
    error: false,
  }
};

export default function beers(state = defaultState, action) {
  switch (action.type) {
    case GET_BEER_LIST_START: {
      return {
        ...state,
        beersList: {
          data: [],
          isLoading: true,
          error: false
        },
      };
    }
    case GET_BEER_LIST_SUCCESS: {
      return {
        ...state,
        beersList: {
          data: action.payload,
          isLoading: false,
          error: false
        },
      };
    }
    case GET_BEER_LIST_ERROR: {
      return {
        ...state,
        beersList: {
          data: action.payload,
          isLoading: false,
          error: true
        },
      };
    }
    case GET_BEER_START: {
      return {
        ...state,
        currentBeer: {
          data: [],
          isLoading: true,
          error: false
        },
      };
    }
    case GET_BEER_SUCCESS: {
      return {
        ...state,
        currentBeer: {
          data: action.payload,
          isLoading: false,
          error: false
        },
      };
    }
    case GET_BEER_ERROR: {
      return {
        ...state,
        currentBeer: {
          data: action.payload,
          isLoading: false,
          error: true
        },
      };
    }
    default: return state;
  }
};
