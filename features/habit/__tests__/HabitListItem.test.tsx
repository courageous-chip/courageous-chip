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
