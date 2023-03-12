/** @format */

import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorAlert } from "../../components/Common/ErrorAlert";
import { ERROR_MESSAGE } from "../../lib/const/actionTypes";

describe("ErrorAlert Components", () => {
  test("renders alert to display error message", () => {
    render(<ErrorAlert error={ERROR_MESSAGE} />);
    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("simulate close event", () => {
    render(<ErrorAlert error={ERROR_MESSAGE} />);
    const btnEelement = screen.getByRole("button");
    act(() => {
      userEvent.click(btnEelement);
    });
  });
});
