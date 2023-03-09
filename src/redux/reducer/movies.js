/**
 * @format
 * @author Ankush Chavan
 * @description This is our movies reducer
 */

import { GET_MOVIES_SUCCESS } from "../../lib/const/actionTypes";

const initialState = {
  movieList: [],
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
        isLoading: false,
        movieList: payload,
      };
    default:
      return state;
  }
};

export default movies;
