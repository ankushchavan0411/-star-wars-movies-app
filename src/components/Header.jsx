/** @format */

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Star Wars Movies</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
