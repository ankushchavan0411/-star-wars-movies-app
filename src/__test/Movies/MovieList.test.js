/** @format */

import MovieList from "../../components/Movies/MovieList";
import { render, screen } from "../../test-utils";

describe("MovieList components", () => {
  test("When movies has empty then `Opps..! movies not found` text should render", () => {
    render(<MovieList movies={[]} />);
    expect(screen.getByText(/Opps..! movies not found/i)).toBeInTheDocument();
  });
  test("When movie have list in arry then `DataTable` should render", () => {
    render(
      <MovieList
        movies={[
          {
            title: "A New Hope",
            episode_id: 4,
            opening_crawl:
              "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            director: "George Lucas",
            producer: "Gary Kurtz, Rick McCallum",
            release_date: "1977-05-25",
            created: "2014-12-10T14:23:31.880000Z",
          },
        ]}
      />
    );
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
    expect(screen.getByText(1)).toBeVisible();
    expect(screen.getByText("Episode 4")).toBeVisible();
    expect(screen.getByText(`Episode ${4} - ${"A New Hope"}`)).toBeVisible();
    expect(
      screen.getByText(
        new Date("2014-12-10T14:23:31.880000Z")?.toLocaleDateString()
      )
    ).toBeVisible();

    expect(screen.getByTestId("data-table").querySelectorAll("tr").length).toBe(
      2
    );
    expect(screen.getByTestId("data-table").querySelectorAll("th").length).toBe(
      4
    );
    expect(screen.getByTestId("data-table").querySelectorAll("td").length).toBe(
      4
    );
  });
});
