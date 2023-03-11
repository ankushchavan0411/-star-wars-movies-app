/** @format */

import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const SortBy = ({ setFilterSortText }) => {
  const [value, setValue] = useState("default");

  useEffect(() => {
    setFilterSortText(value);
  }, [value]);

  return (
    <Form.Select
      size="lg"
      onChange={(e) => {
        setValue(e?.target?.value);
      }}
      value={value}
      data-testid="sort-option"
    >
      <option value="default">Sort by...</option>
      <option value="date">Date</option>
      <option value="episode">Episode</option>
    </Form.Select>
  );
};

export default SortBy;
