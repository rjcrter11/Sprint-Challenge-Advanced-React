import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("header renders", () => {
  const { getByText } = render(<App />);
  const title = getByText(/women's world cup/i);

  expect(title).toBeTruthy();
  expect(title).toHaveTextContent("Women's World Cup");
  expect(title).toBeVisible();
  expect(title).toBeInTheDocument();
});

test("button renders and fires", () => {
  const { getByTestId, getByText } = render(<App />);
  getByTestId(/toggle-btn/i);

  fireEvent.click(getByTestId(/toggle-btn/i));

  const button = getByText(/dark mode/i);
  expect(button).toBeTruthy();
  expect(button).not.toBeFalsy();
  expect(button).toBeInTheDocument();
  expect(button).toBeVisible();
  expect(button).toHaveTextContent("Dark Mode");
});
