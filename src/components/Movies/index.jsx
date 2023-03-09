/** @format */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieList from "./MovieList";

const Movies = () => {
  return (
    <Container>
      <Row>
        <Col>
          <MovieList />
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
};
export default Movies;
