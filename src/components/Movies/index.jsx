/** @format */

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { Loader } from "../Common/Loader";
import Filters from "../Filters";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import { ErrorAlert } from "../Common/ErrorAlert";

const Movies = () => {
  const movieList = useSelector((state) => state?.movies?.movieList);
  const loading = useSelector((state) => state?.loader?.loading);
  const error = useSelector((state) => state?.movies?.error);
  const [filterText, setFilterText] = useState("");
  const [filterSortText, setFilterSortText] = useState("");


  const filteredItems = movieList.filter(
    (item) =>
      item?.title &&
      item?.title.toLowerCase().includes(filterText.toLowerCase())
  );

  filteredItems.sort(function (a, b) {
    if (filterSortText === "episode") {
      return a?.episode_id - b?.episode_id;
    }
    if (filterSortText === "date") {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return dateB - dateA;
    }
    return movieList;
  });

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Filters
            setFilterText={setFilterText}
            setFilterSortText={setFilterSortText}
          />
        </Col>
      </Row>
      <Row>
        <ErrorAlert error={error} />
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Col>
              <MovieList movies={filteredItems} />
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
