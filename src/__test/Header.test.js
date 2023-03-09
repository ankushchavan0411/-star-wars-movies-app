/** @format */

import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Star Wars Movies nav logo name", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Star Wars Movies/i);
  expect(linkElement).toBeInTheDocument();
});
