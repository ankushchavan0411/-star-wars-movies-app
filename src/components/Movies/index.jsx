/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Filters from "../Filters";

const Movies = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Filters />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieList />
        </Col>
        <Col>
          <MovieDetails />
        </Col>
      </Row>
    </Container>
  );
};
export default Movies;
