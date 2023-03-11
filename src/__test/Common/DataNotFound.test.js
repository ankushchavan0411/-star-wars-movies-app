/** @format */

import { render, screen } from "@testing-library/react";
import { DataNotFound } from "../../components/Common/DataNotFound";

test("Check wehter P tag is render", () => {
  render(<DataNotFound />);
  const linkElement = screen.getByTestId("data-not-found");
  expect(linkElement).not.toBeNull();
});

test("text renders with props", () => {
  const message = "Opps..! movies not found";
  render(<DataNotFound text={message} />);
  const linkElement = screen.getByText(message);
  expect(linkElement).toBeInTheDocument();
});
