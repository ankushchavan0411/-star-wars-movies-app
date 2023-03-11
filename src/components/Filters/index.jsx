/** @format */

import React from "react";
import SearchBox from "./SearchBox";
import SortBy from "./SortBy";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Filters = ({ setFilterText, setFilterSortText }) => {
  return (
    <React.Fragment>
      <Row className="filters" data-testid="filters">
        <Col className="col-3">
          <SortBy setFilterSortText={setFilterSortText} />
        </Col>
        <Col>
          <SearchBox setFilterText={setFilterText} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Filters;
