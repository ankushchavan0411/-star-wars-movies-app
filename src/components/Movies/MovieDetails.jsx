/** @format */

import React, { useState } from "react";
import { DataNotFound } from "../Common/DataNotFound";
import Card from "react-bootstrap/Card";

const MovieDetails = () => {
  const [movie, setMovie] = useState({
    title: "A New Hope",
    episode_id: 4,
    opening_crawl:
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    created: "2014-12-10T14:23:31.880000Z",
    edited: "2014-12-20T19:49:45.256000Z",
    url: "https://swapi.dev/api/films/1/",
  });
  return (
    <React.Fragment>
      {movie ? (
        <Card>
          <Card.Header as="h5">Movie Details</Card.Header>
          <Card.Body>
            <Card.Title>
              Episode {movie?.episode_id} - {movie?.title}
            </Card.Title>
            <Card.Text>{movie?.opening_crawl}</Card.Text>
            <Card.Text>Directed by - {movie?.director}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <DataNotFound text={"No movie selected"} />
      )}
    </React.Fragment>
  );
};
export default MovieDetails;
