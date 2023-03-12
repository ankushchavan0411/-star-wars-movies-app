/** @format */

import App from "../App";
import { render, screen } from "../test-utils";
import { footerText } from "../config";

describe("App Components", () => {
  test("Filters should render", () => {
    render(<App />);
    expect(screen.getByTestId("filters")).toBeInTheDocument();
    expect(screen.getByTestId("sort-option")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search movie")).toBeInTheDocument();
    expect(screen.getByTestId("clear-search")).toBeInTheDocument();
  });
  test("`spinner` should render", () => {
    render(<App />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("`Star Wars Movies © 2023` footer text should render", () => {
    render(<App />);
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
