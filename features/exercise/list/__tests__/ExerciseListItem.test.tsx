import React from "react";
import renderer from "react-test-renderer";

import { ExerciseListItem } from "../ExerciseListItem";

describe("<ExerciseListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ExerciseListItem name="🏋️‍♀️ Deadlift" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
