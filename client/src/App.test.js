import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("header renders", () => {
  const { getByText } = render(<App />);
  const title = getByText(/women's world cup/i);

  expect(title).toBeTruthy();
});

test("button renders and fires", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/toggle-btn/i);

  fireEvent.click(getByTestId(/toggle-btn/i));
});
