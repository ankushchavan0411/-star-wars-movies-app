/** @format */

import { render, screen } from "@testing-library/react";
import { Loader } from "../components/Common/Loader";

test("renders spinner to display loader", () => {
  render(<Loader />);
  const linkElement = screen.getByTestId("spinner");
  expect(linkElement).toBeInTheDocument();
});
