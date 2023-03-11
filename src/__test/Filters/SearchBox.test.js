/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "../../components/Filters/SearchBox";

describe("Search Box components", () => {
  test("Input box should be render as placeholder", () => {
    render(<SearchBox setFilterText={jest.fn()} />);

    expect(screen.getByPlaceholderText("Search movie")).toBeInTheDocument();
  });
  test("Button text should be render as Clear Search", () => {
    render(<SearchBox setFilterText={jest.fn()} />);
    expect(screen.getByTestId("clear-search")).toBeInTheDocument();
  });

  test("Clear Search button onClick event", () => {
    render(<SearchBox setFilterText={jest.fn()} />);
    const clearSearchButton = screen.getByTestId("clear-search");
    userEvent.click(clearSearchButton);
    expect(screen.getByPlaceholderText("Search movie")).toHaveValue("");
  });

  test("Input box onChange event", () => {
    render(<SearchBox setFilterText={jest.fn()} />);
    fireEvent.change(screen.getByPlaceholderText("Search movie"), {
      target: { value: "ankush" },
    });
    expect(screen.getByPlaceholderText("Search movie")).toHaveValue("ankush");
  });
});
