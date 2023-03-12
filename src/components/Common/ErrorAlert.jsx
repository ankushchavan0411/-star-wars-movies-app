/** @format */

import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

export const ErrorAlert = ({ error }) => {
  const [show, setShow] = useState(true);
  return (
    <Container>
      {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
    </Container>
  );
};
