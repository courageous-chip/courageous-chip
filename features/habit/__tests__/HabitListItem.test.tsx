import { render } from "@testing-library/react-native";
import React from "react";
import renderer from "react-test-renderer";

import { HabitListItem } from "../HabitListItem";

describe("<HabitListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HabitListItem name="🦷 Floss Teeth" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

test("habit list item exists", async () => {
  const { getByTestId } = render(<HabitListItem name="Floss" />);

  const val = getByTestId("habitItemTestID").props.name;

  expect(val).toEqual(getByTestId("habitItemTestID").props.name);
});
