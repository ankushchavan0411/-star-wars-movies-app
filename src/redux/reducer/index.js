/**
 * @format
 * @author Ankush Chavan
 * @description Here we have combine all our reducer
 */

import { combineReducers } from "redux";
import movies from "./movies";
import loader from "./loader";

export default combineReducers({ movies, loader });
