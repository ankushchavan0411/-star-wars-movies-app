/**
 * @format
 * @author Ankush Chavan
 * @description This is our movies actions
 */

import { getMoviesService } from "../../services";
import {
  LOADING_STARTED,
  LOADING_STOP,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS_SUCCESS,
} from "../../lib/const/actionTypes";

export const getMovies = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_STARTED });
    return getMoviesService()
      .then((res) => {
        dispatch({ type: LOADING_STOP });
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: res?.data?.results,
        });
      })
      .catch((err) => {
        dispatch({ type: LOADING_STOP });
        console.error(err);
      });
  };
};

export const getMovieDetails = (payload) => {
  return (dispatch) => {
    dispatch({ type: LOADING_STARTED });
    setTimeout(() => {
      try {
        dispatch({ type: LOADING_STOP });
        dispatch({
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload,
        });
      } catch (error) {
        dispatch({ type: LOADING_STOP });
        console.error(error);
      }
    }, 2000);
  };
};
