import { render } from "@testing-library/react-native";
import React from "react";

import { HabitForm } from "../HabitForm";

describe("<HabitForm />", () => {
  it("renders as empty", async () => {
    const { baseElement, findByText } = render(<HabitForm />);
    const saveButton = await findByText("💾");

    expect(saveButton).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
