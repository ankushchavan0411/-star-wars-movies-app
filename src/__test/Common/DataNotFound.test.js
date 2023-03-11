/** @format */

import { render, screen } from "@testing-library/react";
import { DataNotFound } from "../../components/Common/DataNotFound";

test("renders data-not-found p tag to display no data found", () => {
  render(<DataNotFound />);
  const linkElement = screen.getByTestId("data-not-found");
  expect(linkElement).toBeInTheDocument();
});
