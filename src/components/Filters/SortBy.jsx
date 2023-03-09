/** @format */

import { useState } from "react";
import Form from "react-bootstrap/Form";

const SortBy = () => {
  const [value, setValue] = useState("default");
  const handleSelectOnChange = (e) => {
    console.log("eeee", e.target.value);
    setValue(e?.target?.value);
  };
  return (
    <Form.Select size="lg" onChange={handleSelectOnChange} value={value}>
      <option value="default">Sort by...</option>
      <option value="all">All</option>
      <option value="date">Date</option>
      <option value="episode">Episode</option>
    </Form.Select>
  );
};

export default SortBy;
