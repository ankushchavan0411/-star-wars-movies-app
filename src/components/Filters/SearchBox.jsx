/** @format */

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = ({ setFilterText }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setFilterText(value);
  }, [value]);

  return (
    <InputGroup>
      <Form.Control
        placeholder="Search movie"
        onChange={(e) => {
          setValue(e?.target?.value);
        }}
        size="lg"
        value={value}
      />
      <Button
        variant="warning"
        data-testid="clear-search"
        onClick={() => setValue("")}
      >
        Clear Search
      </Button>
    </InputGroup>
  );
};
export default SearchBox;
