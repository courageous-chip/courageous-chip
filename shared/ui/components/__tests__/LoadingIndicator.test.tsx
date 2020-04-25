import React from "react";
import renderer from "react-test-renderer";

import { LoadingIndicator } from "../LoadingIndicator";

describe("<Loading />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LoadingIndicator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
