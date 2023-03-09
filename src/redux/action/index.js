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
        console.error(err);
        dispatch({ type: LOADING_STOP });
      });
  };
};
