/**
 * @format
 * @author Ankush Chavan
 * @description This is our loader reducer
 */

import { LOADING_STARTED, LOADING_STOP } from "../../lib/const/actionTypes";

const initialState = {
  loading: false,
};

/**
 * @param {*} state
 * @param {*} action
 */
const loader = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOADING_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loader;
