/** @format */

import DataTable from "../Common/DataTable";

import React from "react";
import { DataNotFound } from "../Common/DataNotFound";

const MovieList = ({ movies }) => {
  return (
    <React.Fragment>
      {movies.length > 0 ? <DataTable movieList={movies} /> : <DataNotFound />}
    </React.Fragment>
  );
};
export default MovieList;
