/** @format */

import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders Star Wars Movies © 2023 footer text", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Star Wars Movies © 2023/i);
  expect(linkElement).toBeInTheDocument();
});
