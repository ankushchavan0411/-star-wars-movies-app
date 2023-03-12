/** @format */

import Movies from "../../components/Movies";
import { render, screen } from "../../test-utils";

describe("Movies Components", () => {
  test("Filters should render", () => {
    render(<Movies />);
    expect(screen.getByTestId("filters")).toBeInTheDocument();
    expect(screen.getByTestId("sort-option")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search movie")).toBeInTheDocument();
    expect(screen.getByTestId("clear-search")).toBeInTheDocument();
  });
  test("`Opps..! movies not found` should render", () => {
    render(<Movies />);
    expect(screen.getByText(/Opps..! movies not found/i)).toBeInTheDocument();
  });

  test("`No movie selected` should render", () => {
    render(<Movies />);
    expect(screen.getByText(/No movie selected/i)).toBeInTheDocument();
  });
});
