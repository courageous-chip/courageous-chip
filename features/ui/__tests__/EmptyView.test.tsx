import React from "react";
import renderer from "react-test-renderer";

import { EmptyView } from "../EmptyView";

describe("<EmptyView />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EmptyView />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
