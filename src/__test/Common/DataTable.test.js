/** @format */
import { render, screen } from "@testing-library/react";
import DataTable from "../../components/Common/DataTable";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Test cases for DataTable", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  it('renders table to display movie list"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );
    const linkElement = screen.getByTestId("data-table");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).not.toBeNull();
  });
});
