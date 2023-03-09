/** @format */

import DataTable from "../Common/DataTable";

import React, { useState } from "react";
import { DataNotFound } from "../Common/DataNotFound";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  return (
    <React.Fragment>
      {movies.length > 0 ? <DataTable /> : <DataNotFound />}
    </React.Fragment>
  );
};
export default MovieList;
