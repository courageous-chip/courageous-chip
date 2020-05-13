import * as screens from "react-native-screens";

import { configureScreens } from "../configureScreens";

jest.mock("react-native-screens");

describe("configureScreens()", () => {
  it("should enable screens", () => {
    const spy = jest
      .spyOn(screens, "enableScreens")
      .mockImplementationOnce(() => {});

    configureScreens();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
