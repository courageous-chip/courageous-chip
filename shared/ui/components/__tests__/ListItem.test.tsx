import React from "react";
import renderer from "react-test-renderer";

import { ListItem } from "../ListItem";

describe("<ListItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ListItem id="1" onPress={() => {}} text="One" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
