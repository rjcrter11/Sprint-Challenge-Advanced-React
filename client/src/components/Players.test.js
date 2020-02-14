import React from "react";
import Players from "./Players";
import { render, act } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Players />, div);
  unmountComponentAtNode(div);
});

test("title renders", () => {
  const { getByText } = render(<Players />);
  const header = getByText(/most searched players/i);

  expect(header).toBeTruthy();
  expect(header).toBeInTheDocument();
});

// test("main div renders", () => {
//   const { getByTestId, getByText } = render(<Players />);
//   const div = getByTestId(/main-container/i);
//   const divChild = getByText(/most searched players/i);

//   expect(div).toContainElement(divChild);
// });

test("div container renders", () => {
  const { getByTestId } = render(<Players />);
  const div = getByTestId(/player-container/i);

  expect(div).toHaveClass("players-container");
  expect(div).toBeVisible();
  expect(div).toBeInTheDocument();
});
