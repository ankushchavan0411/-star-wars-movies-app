/** @format */

import React, { useState } from "react";
import { DataNotFound } from "../Common/DataNotFound";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  return (
    <React.Fragment>
      {movie.length > 0 ? (
        <h1>Movie Details</h1>
      ) : (
        <DataNotFound text={"No movie selected"} />
      )}
    </React.Fragment>
  );
};
export default MovieDetails;
