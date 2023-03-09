/**
 * @format
 * @author Ankush Chavan
 * @description In this file, we kept all app services.
 */

import api from "../axios";
import { baseUrl } from "../config";

/**
 * @param {*} payload
 * @description Get Movies List Service
 */
export const getMovies = () => api(baseUrl).get(`?format=json`);
