import React from "react";
import renderer from "react-test-renderer";

import { ErrorView } from "../ErrorView";

describe("<ErrorView />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ErrorView />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
