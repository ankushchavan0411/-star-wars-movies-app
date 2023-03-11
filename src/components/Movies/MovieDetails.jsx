/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { DataNotFound } from "../Common/DataNotFound";

const MovieDetails = () => {
  const movie = useSelector((state) => state?.movies?.movie);

  return (
    <React.Fragment>
      <Card className="movie-card" data-testid="movie-card">
        {movie ? (
          <>
            <Card.Header as="h5">Movie Details</Card.Header>
            <Card.Body>
              <Card.Title>
                Episode {movie?.episode_id} - {movie?.title}
              </Card.Title>
              <Card.Text>{movie?.opening_crawl}</Card.Text>
              <Card.Text>Directed by - {movie?.director}</Card.Text>
            </Card.Body>
          </>
        ) : (
          <DataNotFound text={"No movie selected"} />
        )}
      </Card>
    </React.Fragment>
  );
};
export default MovieDetails;
