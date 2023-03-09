/** @format */

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = () => {
  const handleSearchOnChange = (e) => {
    console.log("e", e?.target?.value);
  };
  return (
    <InputGroup>
      <Form.Control
        placeholder="Search movie"
        onChange={handleSearchOnChange}
        size="lg"
      />
      <Button variant="primary" id="search">
        Search
      </Button>
    </InputGroup>
  );
};
export default SearchBox;
