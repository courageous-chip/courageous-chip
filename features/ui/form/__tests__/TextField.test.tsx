import React from "react";
import renderer from "react-test-renderer";

import { TextField } from "../TextField";

describe("<TextField />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TextField marginBottom={5} placeholder="💪 Biceps Curl" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
