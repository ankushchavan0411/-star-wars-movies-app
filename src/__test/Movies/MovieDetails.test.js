/** @format */

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MovieDetails from "../../components/Movies/MovieDetails";

describe("MovieDetails components", () => {
  const initialState = {
    movieList: [],
    movie: null,
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  test("Movie card should render", () => {
    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );
    expect(screen.getByTestId("movie-card")).toBeInTheDocument();
  });

  test("When movie object null in intialState then `No movie selected` text should render", () => {
    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );
    expect(screen.getByText(/No movie selected/i)).toBeInTheDocument();
  });

  test.skip("When movie object have data in sotre state then data should render", () => {
    store = mockStore({
      ...initialState,
      movie: {
        title: "A New Hope",
        episode_id: 4,
        opening_crawl:
          "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        created: "2014-12-10T14:23:31.880000Z",
      },
    });
    console.log("store", store);
    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );
    expect(screen.getByText(/Movie Details/i)).toBeInTheDocument();
  });
});
