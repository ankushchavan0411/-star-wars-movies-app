/** @format */

import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { footerText } from "../config";

test("renders Star Wars Movies © 2023 footer text", () => {
  render(<Footer />);
  const linkElement = screen.getByText(footerText);
  expect(linkElement).toBeInTheDocument();
});
