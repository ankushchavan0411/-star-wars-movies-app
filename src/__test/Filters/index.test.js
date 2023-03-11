/** @format */

import { render, screen } from "@testing-library/react";
import Filters from "../../components/Filters";

test("render filters", () => {
  render(<Filters setFilterText={jest.fn()} setFilterSortText={jest.fn()} />);
  const linkElement = screen.getByTestId("filters");
  expect(linkElement).toBeInTheDocument();
});
