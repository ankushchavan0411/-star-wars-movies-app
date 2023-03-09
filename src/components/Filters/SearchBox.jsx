/** @format */

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const SearchBox = () => {
  const [value, setValue] = useState("");

  const handleSearchOnChange = (e) => {
    console.log("e", e?.target?.value);
    setValue(e?.target?.value);
  };
  return (
    <InputGroup>
      <Form.Control
        placeholder="Search movie"
        onChange={handleSearchOnChange}
        size="lg"
        value={value}
      />
      <Button variant="warning" id="search" onClick={() => setValue("")}>
        Clear Search
      </Button>
    </InputGroup>
  );
};
export default SearchBox;
