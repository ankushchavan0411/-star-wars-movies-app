/** @format */
import { render, screen } from "@testing-library/react";
import DataTable from "../../components/Common/DataTable";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Test cases for DataTable", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);

  test('renders table to display movie list"', () => {
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );
    const linkElement = screen.getByTestId("data-table");
    expect(linkElement).not.toBeNull();
  });

  test("th head text should renders", () => {
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );
    expect(screen.getByText("#")).toBeVisible();
    expect(screen.getByText("Episode")).toBeVisible();
    expect(screen.getByText("Name")).toBeVisible();
    expect(screen.getByText("Date")).toBeVisible();
  });

  test("td text should renders as per props data", () => {
    const data = [
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
    ];
    render(
      <Provider store={store}>
        <DataTable movieList={data} />
      </Provider>
    );
    expect(screen.getByText(1)).toBeVisible();
    expect(screen.getByText("Episode 4")).toBeVisible();
    expect(screen.getByText(`Episode ${4} - ${"A New Hope"}`)).toBeVisible();
    expect(
      screen.getByText(
        new Date("2014-12-10T14:23:31.880000Z")?.toLocaleDateString()
      )
    ).toBeVisible();
  });
});
