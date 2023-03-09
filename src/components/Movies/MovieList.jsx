/** @format */

import DataTable from "../Common/DataTable";
import Card from "react-bootstrap/Card";
import React from "react";
import { DataNotFound } from "../Common/DataNotFound";

const MovieList = ({ movies }) => {
  return (
    <React.Fragment>
      {movies.length > 0 ? (
        <DataTable movieList={movies} />
      ) : (
        <Card style={{ height: "40vh" }}>
          <DataNotFound />
        </Card>
      )}
    </React.Fragment>
  );
};
export default MovieList;
