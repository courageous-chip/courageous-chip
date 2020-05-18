import { render } from "@testing-library/react-native";
import React from "react";

import { ExerciseForm } from "../ExerciseForm";

describe("<ExerciseForm />", () => {
  it("renders as empty", async () => {
    const { baseElement, findByText } = render(<ExerciseForm />);
    const saveButton = await findByText("💾");

    expect(saveButton).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
