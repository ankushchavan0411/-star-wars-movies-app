/**
 * @format
 * @author Ankush Chavan
 * @description This is our movies reducer
 */

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../../lib/const/actionTypes";

const initialState = {
  movieList: [],
  movie: null,
};

/**
 * @param {*} state
 * @param {*} action
 */
const movies = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: payload,
      };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: payload,
      };
    default:
      return state;
  }
};

export default movies;
