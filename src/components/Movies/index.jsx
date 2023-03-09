/** @format */

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { Loader } from "../Common/Loader";
import Filters from "../Filters";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";

const Movies = () => {
  const movieList = useSelector((state) => state?.movies?.movieList);
  const loading = useSelector((state) => state?.loader?.loading);

  console.log("movieList", movieList);
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Filters />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Col>
              <MovieList movies={movieList} />
            </Col>
            <Col>
              <MovieDetails />
            </Col>
          </React.Fragment>
        )}
      </Row>
    </Container>
  );
};
export default Movies;
