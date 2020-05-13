import React from "react";
import renderer from "react-test-renderer";

import { ThemedItemSeparator } from "../ThemedItemSeparator";

describe("<EmptyView />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ThemedItemSeparator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
