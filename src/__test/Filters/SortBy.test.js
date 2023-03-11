/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import SortBy from "../../components/Filters/SortBy";

describe("SortBy Box components", () => {
  test("Sort by select option should be render", () => {
    render(<SortBy setFilterSortText={jest.fn()} />);
    expect(screen.getByTestId("sort-option")).toBeInTheDocument();
  });
  test("Select options should render", () => {
    render(<SortBy setFilterSortText={jest.fn()} />);
    expect(screen.getByText("Sort by...")).toBeVisible();
    expect(screen.getByText("Date")).toBeVisible();
    expect(screen.getByText("Episode")).toBeVisible();
  });
  test("Option onChange event", () => {
    render(<SortBy setFilterSortText={jest.fn()} />);
    fireEvent.change(screen.getByTestId("sort-option"), {
      target: { value: "date" },
    });
    expect(screen.getByTestId("sort-option")).toHaveValue("date");
  });
});
