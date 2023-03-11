/** @format */

import MovieDetails from "../../components/Movies/MovieDetails";
import { render, screen } from "../../test-utils";

describe("MovieDetails components", () => {
  test("Movie card should render", () => {
    render(<MovieDetails />);
    expect(screen.getByTestId("movie-card")).toBeInTheDocument();
  });

  test("When movie object null in intialState then `No movie selected` text should render", () => {
    render(<MovieDetails />);
    expect(screen.getByText(/No movie selected/i)).toBeInTheDocument();
  });
});
