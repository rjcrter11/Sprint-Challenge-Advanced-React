import React from "react";
import Players from "./Players";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode } from "react-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Players />, div);
  unmountComponentAtNode(div);
});

test("title renders", () => {
  const { getByText } = render(<Players />);
  const header = getByText(/most searched players/i);

  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});
