import { render, wait } from "@testing-library/react-native";
import React from "react";

import { HabitForm } from "../HabitForm";

describe("<HabitForm />", () => {
  it("renders as empty", async () => {
    const { baseElement, getByText } = render(<HabitForm />);

    await wait(() => expect(getByText("🤷‍♀️")));

    expect(baseElement).toMatchSnapshot();
  });
});
