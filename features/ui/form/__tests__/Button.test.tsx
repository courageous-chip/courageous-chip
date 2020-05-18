import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../Button";

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button marginBottom={5} text="🌴" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders loading", () => {
    const tree = renderer
      .create(<Button loading marginBottom={5} text="🌴" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
