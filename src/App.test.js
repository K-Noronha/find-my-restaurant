import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("check for all intitial content", () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<App />);

  const title = getByText("FIND YOUR RESTAURANT");
  const inputHolder = getByPlaceholderText("Enter city");
  const submitButton = getByTestId("submit-button");

  expect(title).toBeInTheDocument();
  expect(inputHolder).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
