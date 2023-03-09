/** @format */

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = () => {
  const handleSearchOnChange = (e) => {
    console.log("e", e?.target?.value);
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search movie"
        onChange={handleSearchOnChange}
      />
      <Button variant="primary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
};
export default SearchBox;
