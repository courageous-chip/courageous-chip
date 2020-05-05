import React from "react";
import renderer from "react-test-renderer";

import { LoadingView } from "../LoadingView";

describe("<LoadingView />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LoadingView />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
