import React from "react";
import renderer from "react-test-renderer";

import { HabitListItem } from "../HabitListItem";

describe("<HabitListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HabitListItem id="1" name="🦷 Floss Teeth" onPress={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
