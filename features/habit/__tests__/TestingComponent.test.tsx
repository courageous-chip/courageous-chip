import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import { TestingComponent } from "../Testing";

test("text input have a value", async () => {
  const { getByTestId } = render(<TestingComponent />);
  const famousWomanInHistory = "Ada Lovelace";

  fireEvent.changeText(getByTestId("input"), famousWomanInHistory);

  expect(getByTestId("input").props.value).toEqual(famousWomanInHistory);
});

test("text input to have typo", async () => {
  const { getByTestId } = render(<TestingComponent />);
  const famousWomanInHistory = "Ada Lovelace";
  const typo = "2";

  fireEvent.changeText(getByTestId("input"), typo);

  expect(getByTestId("input").props.value).not.toEqual(famousWomanInHistory);
});

test("text input to have typo", async () => {
  const { getByTestId } = render(<TestingComponent />);
  const famousWomanInHistory = "Ada Lovelace";
  const typo = "2";

  fireEvent.changeText(getByTestId("input"), typo);

  expect(getByTestId("input").props.value).not.toEqual(famousWomanInHistory);
});
